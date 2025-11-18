import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Submit contact form
app.post('/make-server-1be99178/submit-contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, company, email, service } = body;

    if (!name || !email || !service) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const timestamp = new Date().toISOString();
    const submissionId = `submission_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    const submission = {
      id: submissionId,
      name,
      company: company || 'N/A',
      email,
      service,
      timestamp,
    };

    await kv.set(submissionId, JSON.stringify(submission));

    console.log('Contact form submitted successfully:', submissionId);
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return c.json({ error: 'Failed to submit form', details: String(error) }, 500);
  }
});

// Get all submissions for admin
app.get('/make-server-1be99178/get-submissions', async (c) => {
  try {
    const submissions = await kv.getByPrefix('submission_');
    
    const parsedSubmissions = submissions.map(sub => {
      try {
        return JSON.parse(sub);
      } catch {
        return sub;
      }
    }).sort((a, b) => {
      // Sort by timestamp, newest first
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });

    console.log(`Fetched ${parsedSubmissions.length} submissions for admin`);
    return c.json({ submissions: parsedSubmissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return c.json({ error: 'Failed to fetch submissions', details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);
