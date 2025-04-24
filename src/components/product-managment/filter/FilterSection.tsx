export function FilterSection() {
    return (
      <div className="gap-4 grid grid-cols-4 mb-6">
        <div>
          <h3 className="mb-2 font-medium text-sm">Category</h3>
          <div className="relative">
            <select className="bg-white p-2 pr-8 border border-gray-200 rounded-md w-full text-sm appearance-none">
              <option>Seafood</option>
              <option>FastFood</option>
              <option>Desserts</option>
              <option>Beverages</option>
            </select>
            <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
  
        <div>
          <h3 className="mb-2 font-medium text-sm">Status</h3>
          <div className="relative">
            <select className="bg-white p-2 pr-8 border border-gray-200 rounded-md w-full text-sm appearance-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
  
        <div>
          <h3 className="mb-2 font-medium text-sm">Price</h3>
          <div className="relative">
            <select className="bg-white p-2 pr-8 border border-gray-200 rounded-md w-full text-sm appearance-none">
              <option>$1 - $15</option>
              <option>$15 - $30</option>
              <option>$30 - $50</option>
              <option>$50+</option>
            </select>
            <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
  
        <div>
          <h3 className="mb-2 font-medium text-sm">Restaurant</h3>
          <div className="relative">
            <select className="bg-white p-2 pr-8 border border-gray-200 rounded-md w-full text-sm appearance-none">
              <option>All Restaurant</option>
              <option>Italian Bistro</option>
              <option>Sushi Palace</option>
              <option>Burger Joint</option>
            </select>
            <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
  