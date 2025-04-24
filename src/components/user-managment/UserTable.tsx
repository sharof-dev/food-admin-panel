import { Trash2 } from "lucide-react"

// Sample user data
const users = [
  { id: "# 001", name: "John Doe", email: "john.doe@example.com", role: "Customer", orders: 12, status: "Active" },
  { id: "# 002", name: "Jane Smith", email: "jane.smith@example.com", role: "Customer", orders: 8, status: "Active" },
  {
    id: "# 003",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    role: "Customer",
    orders: 5,
    status: "Inactive",
  },
  { id: "# 004", name: "Emily Davis", email: "emily.d@example.com", role: "Customer", orders: 15, status: "Active" },
  { id: "# 005", name: "Michael Wilson", email: "michael.w@example.com", role: "Admin", orders: 0, status: "Active" },
  { id: "# 006", name: "Sarah Brown", email: "sarah.b@example.com", role: "Customer", orders: 3, status: "Inactive" },
  { id: "# 007", name: "David Miller", email: "david.m@example.com", role: "Customer", orders: 7, status: "Active" },
  {
    id: "# 008",
    name: "Lisa Taylor",
    email: "lisa.t@example.com",
    role: "Restaurant Owner",
    orders: 0,
    status: "Active",
  },
]

export function UserTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-gray-200 border-b font-medium text-gray-500 text-sm text-left">
            <th className="px-4 py-3 w-12">
              <input type="checkbox" className="border-gray-300 rounded" />
            </th>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Orders</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-gray-200 border-b text-sm">
              <td className="px-4 py-3">
                <input type="checkbox" className="border-gray-300 rounded" />
              </td>
              <td className="px-4 py-3 text-gray-500">{user.id}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-10 h-10 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{user.name}</span>
                </div>
              </td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3">{user.orders}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
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
