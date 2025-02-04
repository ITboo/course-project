import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PopularTemplates = () => {
  return (
    <Table className='w-1/2 m-auto mb-5'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Filled forms</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>Comprehendo victoria</TableCell>
          <TableCell>Dana Maggio</TableCell>
          <TableCell>250</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell>Comprehendo victoria</TableCell>
          <TableCell>Dana Maggio</TableCell>
          <TableCell>220</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">3</TableCell>
          <TableCell>Comprehendo victoria</TableCell>
          <TableCell>Dana Maggio</TableCell>
          <TableCell>210</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">4</TableCell>
          <TableCell>Comprehendo victoria</TableCell>
          <TableCell>Dana Maggio</TableCell>
          <TableCell>200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">5</TableCell>
          <TableCell>Comprehendo victoria</TableCell>
          <TableCell>Dana Maggio</TableCell>
          <TableCell>150</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PopularTemplates;
