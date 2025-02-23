import { Button } from "./button"
import { Icon } from "./icon"

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher = ({theme, toggleTheme}:ThemeSwitcherProps) => {
  return (
    <Button onClick={toggleTheme} size={'sm'} variant={'theme'}>
          {theme === 'light' ?  <Icon name={"sun"}/> : <Icon name={"moon"}/>}
        </Button>
  )
}

export default ThemeSwitcher