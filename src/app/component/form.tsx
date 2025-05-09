import React from 'react'

const Form = () => {
  return (
 <form className=" mx-auto">
  <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
  <textarea id="message"  className="block p-2.5 w-60 sm:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</form>
  )
}

export default Form