import { Link } from 'react-router-dom'
import { FormInput as Forms } from 'lucide-react';
import { getAllFormsRoute } from '@/app/lib/routes';

const logo = () => {
  return (
    <Link to={getAllFormsRoute()} className="flex items-center space-x-2">
        <Forms className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        <span className="text-xl font-bold">FormCraft</span>
      </Link>
  )
}

export default logo