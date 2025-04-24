import { FC } from 'react'
import { IoMdArrowDown } from 'react-icons/io'

const Impression:FC = () => {
  return (
    <div className="bg-white shadow px-6 py-2 rounded-lg">
          <p className="mb-3 text-gray-500 text-sm">Impressions</p>
          <div className="flex">
            <h3 className="font-bold text-gray-800 text-3xl">40,555K</h3>
            <span className="flex items-center bg-[#FDF2F8] ml-6 p-2 rounded-4xl text-[#ED4F9D]"><IoMdArrowDown /> 59%</span>

          </div>
          <div className="flex items-center mt-4">
            <span className="font-semibold text-gray-500 text-sm">Last week: 31,256</span>
          </div>
        </div>
  )
}

export default Impression
