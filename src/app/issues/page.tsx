import { Button, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import IssueTable from './IssueTable';

const Issues = async () => {
  return (
    <div className='max-w-xl mx-auto'>
      <header className='flex justify-between'>
        <Heading>Issues</Heading>
        <Button>
          <Link href='/issues/new'>New Issue</Link>
        </Button>
      </header>
      <section className=''>
        <section>
          {/* {issues.map((issue: Issue) => (
            <div key={issue.id}>
              <p>{issue.title}</p>
              <p>{issue.description}</p>
              <p>{issue.status}</p>
            </div>
          ))} */}
          <IssueTable />
        </section>
      </section>
    </div>
  );
};
export default Issues;
