import { Button } from './button';

const LangSwitcher = () => {
  return (
    <Button onClick={() => alert('pressed')} size={'sm'} variant={'theme'}>
      EN
    </Button>
  );
};

export default LangSwitcher;
