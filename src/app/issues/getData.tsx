const domain = 'https://issue-tracker-ebon-three.vercel.app';
const localdomain = 'https://issue-tracker-ebon-three.vercel.app';

export async function getData() {
  const res = await fetch(`${domain}/api/issues`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
