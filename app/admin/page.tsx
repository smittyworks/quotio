import { supabase } from '@/lib/supabase';

interface WaitlistEntry {
  id: string;
  email: string;
  company: string | null;
  created_at: string;
}

async function getWaitlistEntries() {
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching waitlist:', error);
    return [];
  }

  return data as WaitlistEntry[];
}

export default async function AdminPage() {
  const entries = await getWaitlistEntries();

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-neutral-900">Waitlist Admin</h1>
          <p className="mt-2 text-neutral-600">
            Total signups: <span className="font-semibold">{entries.length}</span>
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Signed Up
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {entries.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-neutral-500">
                    No waitlist entries yet.
                  </td>
                </tr>
              ) : (
                entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-neutral-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                      {entry.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600">
                      {entry.company || '—'}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600">
                      {new Date(entry.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-sm text-indigo-600 hover:text-indigo-700"
          >
            ← Back to landing page
          </a>
        </div>
      </div>
    </div>
  );
}
