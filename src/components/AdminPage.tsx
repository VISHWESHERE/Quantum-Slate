import React, { useEffect, useState } from 'react';
import { Users, Mail, TrendingUp, Activity } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Submission {
  id: string;
  name: string;
  company: string;
  email: string;
  service: string;
  timestamp: string;
}

export function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-1be99178/get-submissions`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch submissions');
      }

      setSubmissions(data.submissions || []);
      console.log('Fetched submissions:', data.submissions);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError(err instanceof Error ? err.message : 'Failed to load submissions');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate stats
  const totalSubmissions = submissions.length;
  const uniqueEmails = new Set(submissions.map(s => s.email)).size;
  const workshopRequests = submissions.filter(s => 
    s.service.includes('Workshop')
  ).length;
  const uavRequests = submissions.filter(s => 
    s.service.includes('UAV')
  ).length;

  const stats = [
    {
      icon: Users,
      title: 'Total Submissions',
      value: totalSubmissions,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Unique Contacts',
      value: uniqueEmails,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Workshop Requests',
      value: workshopRequests,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Activity,
      title: 'UAV Inquiries',
      value: uavRequests,
      gradient: 'from-pink-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl text-white font-bold">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Quantum Slate - Contact Form Submissions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-20 w-fit`}>
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-400 mb-1">{stat.title}</p>
                <p className="text-4xl text-white font-bold">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Submissions Table */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-white font-bold">Recent Submissions</h2>
              <button
                onClick={fetchSubmissions}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Refresh
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="p-12 text-center text-gray-400">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
              <p className="mt-4">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-red-400">{error}</p>
              <button
                onClick={fetchSubmissions}
                className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                Try Again
              </button>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No submissions yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-400">Name</th>
                    <th className="px-6 py-4 text-left text-gray-400">Company</th>
                    <th className="px-6 py-4 text-left text-gray-400">Email</th>
                    <th className="px-6 py-4 text-left text-gray-400">Service</th>
                    <th className="px-6 py-4 text-left text-gray-400">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white">{submission.name}</td>
                      <td className="px-6 py-4 text-gray-300">{submission.company}</td>
                      <td className="px-6 py-4 text-gray-300">{submission.email}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm">
                          {submission.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {new Date(submission.timestamp).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
