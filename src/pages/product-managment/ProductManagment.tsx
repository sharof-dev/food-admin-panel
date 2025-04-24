import { Search } from "lucide-react"
import { ProductTable } from "../../components/product-managment/product-table/ProductTable"
import { FilterSection } from "../../components/product-managment/filter/FilterSection"

export default function ProductManagement() {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center bg-white mb-6 p-3 rounded-md">
            <div className="relative">
              <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="pr-4 pl-10 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-5 bg-[#F3F3F4] p-2 rounded-md">
                <span className="text-gray-500 text-sm">Show:</span>
                <select className="border-none rounded-md text-sm">
                  <option>All products</option>
                  <option>Active products</option>
                  <option>Inactive products</option>
                </select>
              </div>
              <div className="flex items-center gap-5 bg-[#F3F3F4] p-2 rounded-md">
                <span className="text-gray-500 text-sm">Sort by:</span>
                <select className="border-none rounded-md text-sm">
                  <option>Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A-Z</option>
                </select>
              </div>

              <button className="flex items-center gap-1 bg-[#F3F3F4] ml-2 p-2 px-3 border border-gray-200 rounded-md text-sm">
                Export
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>

              <button className="flex items-center gap-1 bg-[#2B964F] ml-2 px-3 py-2 rounded-md text-white text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Product
              </button>
            </div>
          </div>


          <FilterSection />
          <ProductTable />
        </main>
      </div>
    </div>
  )
}
