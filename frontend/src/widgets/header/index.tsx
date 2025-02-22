import { ThemeContext } from '@/app/context/ThemeContext';
import { useContext } from 'react';
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from '@clerk/clerk-react';
import Logo from '@/components/ui/logo';
import SearchForm from '@/components/ui/searchForm';
import ThemeSwitcher from '@/components/ui/themeSwitcher';
import LangSwitcher from '@/components/ui/langSwitcher';
import CreateFormButton from '@/components/ui/createFormButton';

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="container m-auto flex p-4 items-center justify-between mb-[30px]">
      <Logo />
      <SearchForm />
      <CreateFormButton />
      <div className="flex gap-3 items-center">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <LangSwitcher />
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
