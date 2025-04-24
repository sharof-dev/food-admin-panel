import { Trash2 } from "lucide-react"

// Sample product data
const products = [
  { id: "# 123", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Active" },
  { id: "# 124", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Active" },
  { id: "# 125", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Active" },
  { id: "# 126", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Inactive" },
  { id: "# 127", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Active" },
  { id: "# 128", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Active" },
  { id: "# 129", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Inactive" },
  { id: "# 130", name: "Limonli Makaron", price: "$14.45", category: "FastFood", orders: 364, status: "Inactive" },
]

export function ProductTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-gray-200 border-b font-medium text-gray-500 text-sm text-left">
            <th className="px-4 py-3 w-12">
              <input type="checkbox" className="border-gray-300 rounded" />
            </th>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Products</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Count of orders</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-gray-200 border-b text-sm">
              <td className="px-4 py-3">
                <input type="checkbox" className="border-gray-300 rounded" />
              </td>
              <td className="px-4 py-3 text-gray-500">{product.id}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-md w-10 h-10 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{product.name}</span>
                </div>
              </td>
              <td className="px-4 py-3">{product.price}</td>
              <td className="px-4 py-3">{product.category}</td>
              <td className="px-4 py-3">{product.orders}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    product.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button className="bg-green-500 px-3 py-1 rounded font-medium text-white text-xs">Edit</button>
                  <button className="p-1 border border-gray-200 rounded">
                    <Trash2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
