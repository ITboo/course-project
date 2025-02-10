import { Link } from 'react-router-dom';
import { Search, FormInput as Forms, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/app/context/ThemeContext';
import { useContext } from 'react';
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from '@clerk/clerk-react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="container m-auto flex p-4 items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <Forms className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        <span className="text-xl font-bold">FormCraft</span>
      </Link>
      <form className="flex-1 max-w-lg mx-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search templates..."
            className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="flex gap-3 items-center">
       
        <Button onClick={toggleTheme} size={'sm'} variant={'theme'}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
        <Button onClick={() => alert('pressed')} size={'sm'} variant={'theme'}>
          EN
        </Button>
        <div className="flex gap-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div> 
      
    </header>
  );
};

export default Header;
