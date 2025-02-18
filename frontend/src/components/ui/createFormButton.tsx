import Card from './card';
import { getCreateFormRoute } from '@/app/lib/routes';
import { CirclePlus } from 'lucide-react';

const createFormButton = () => {
  return (
    <Card url={getCreateFormRoute()} title={'Add Form'} className="">
      <CirclePlus size={75} />
    </Card>
  );
};

export default createFormButton;
