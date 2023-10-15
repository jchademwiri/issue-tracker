import { Table } from '@radix-ui/themes';
import { getData } from './getData';

type Issue = {
  id: number;
  title: string;
  description: string;
  Status: string;
};

const IssueTable = async () => {
  const issues = await getData();
  console.log(issues);
  return (
    <section>
      <div></div>
      <div>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {issues.map((issue: Issue) => (
              <Table.Row key={issue.id}>
                <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
                <Table.Cell>{issue.description}</Table.Cell>
                <Table.Cell>{issue.Status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </section>
  );
};
export default IssueTable;
