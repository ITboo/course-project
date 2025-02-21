import { Button } from "./button"
import { Icon } from "./icon"

const ThemeSwitcher = ({theme, toggleTheme}) => {
  return (
    <Button onClick={toggleTheme} size={'sm'} variant={'theme'}>
          {theme === 'light' ?  <Icon name={"sun"}/> : <Icon name={"moon"}/>}
        </Button>
  )
}

export default ThemeSwitcher