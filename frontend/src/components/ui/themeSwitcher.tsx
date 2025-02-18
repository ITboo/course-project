import { Moon, Sun } from "lucide-react"
import { Button } from "./button"


const ThemeSwitcher = ({theme, toggleTheme}) => {
  return (
    <Button onClick={toggleTheme} size={'sm'} variant={'theme'}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
  )
}

export default ThemeSwitcher