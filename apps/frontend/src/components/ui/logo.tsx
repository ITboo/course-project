import { Link } from 'react-router-dom'
import { getAllFormsRoute } from '@/app/lib/routes';

const logo = () => {
  return (
    <Link to={getAllFormsRoute()} className="flex items-center space-x-2">
        <img src="/favicon.svg" alt="FormCraft logo" width={40}/>
        <span className="text-xl font-bold">FormCraft</span>
      </Link>
  )
}

export default logo