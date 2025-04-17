'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiMiniXMark } from 'react-icons/hi2'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit=(e : React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
console.log(searchTerm);
setIsOpen(false)

  }

  return (
    <div
      className={`flex-center w-full transition-all duration-300 ${
        isOpen ? 'absolute top-0 right-0  w-full bg-white h-24 z-50 bg-whit text-black dark:bg-slate-800 dark:text-slate-100' : 'w-auto'
      }`}
    >
      {isOpen ? (
        <form
        onSubmit={(e)=>handleSubmit(e)}
         className='flex-center relative w-full bg-whit text-black dark:bg-slate-800 dark:text-slate-100'>
          <div className='relative w-1/2 bg-whit text-black dark:bg-slate-800 dark:text-slate-100'>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
              placeholder='سرچ کنید'
              value={searchTerm}
              className='bg-gray-200 dark:bg-slate-500 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 dark:placeholder:text-gray-200'
            />
            <button
              type='submit'
              className='absolute  left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-600 transition-all duration-300'
            >
              <HiMagnifyingGlass className='w-6 h-6' />
            </button>
          </div>
          <button
            type='button'
            className='left-4 top-1/2  text-gray-600 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-600 transition-all duration-300'
            onClick={() => setIsOpen(false)}
          >
            <HiMiniXMark className='w-6 h-6' />
          </button>
        </form>
      ) : (
        <Button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className='h-6 w-6' />
        </Button>
      )}
    </div>
  )
}

export default SearchBar
