import { Search } from 'lucide-react'

const SearchForm = () => {
  return (
    <form className="flex-1 max-w-lg mx-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search templates..."
            className="w-full bg-transparent pl-4 pr-10 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
  )
}

export default SearchForm