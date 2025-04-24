import { useState } from "react"
import { Edit2, Trash2 } from "lucide-react"

// Sample promo code data
const initialPromoCodes = [
  {
    id: 1,
    title: "Bahor aksiyasi -20%",
    dateRange: "1-martdan 31-martgacha",
    progress: 63,
    description: "10 ta set olsa, -20%",
  },
  {
    id: 2,
    title: "Bahor aksiyasi -20%",
    dateRange: "1-martdan 31-martgacha",
    progress: 63,
    description: "10 ta set olsa, -20%",
  },
  {
    id: 3,
    title: "Bahor aksiyasi -20%",
    dateRange: "1-martdan 31-martgacha",
    progress: 63,
    description: "10 ta set olsa, -20%",
  },
  {
    id: 4,
    title: "Bahor aksiyasi -20%",
    dateRange: "1-martdan 31-martgacha",
    progress: 63,
    description: "10 ta set olsa, -20%",
  },
  {
    id: 5,
    title: "Bahor aksiyasi -20%",
    dateRange: "1-martdan 31-martgacha",
    progress: 63,
    description: "10 ta set olsa, -20%",
  },
  {
    id: 6,
    title: "Bahor aksiyasi -20%",
    dateRange: "1-martdan 31-martgacha",
    progress: 63,
    description: "10 ta set olsa, -20%",
  },
]

interface PromoCodeListProps {
  searchTerm: string;
}

export function PromoCodeList({ searchTerm }: PromoCodeListProps) {
  const [promoCodes, setPromoCodes] = useState(initialPromoCodes)

  const filteredPromoCodes = promoCodes.filter((code) => code.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDelete = (id: number) => {
    setPromoCodes(promoCodes.filter((code) => code.id !== id))
  }


  return (
    <div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPromoCodes.map((promoCode) => (
          <div key={promoCode.id} className="bg-white p-4 border border-gray-200 rounded-lg">
            <h3 className="mb-2 font-bold text-lg">{promoCode.title}</h3>
            <p className="mb-2 text-gray-600 text-sm">{promoCode.dateRange}</p>
            <div className="flex justify-between items-center gap-3">
              <div className="flex mb-2 border border-[#2B964F] rounded-full w-[95%] h-3 overflow-hidden">
                <div className="bg-green-500 rounded-full h-full" style={{ width: `${promoCode.progress}%` }}></div>
              </div>
              <p className="-top-1 relative text-gray-500 text-xs">{promoCode.progress}%</p>
            </div>
            <div className="flex justify-between items-center mb-4">
            </div>
            <p className="mb-4 text-sm">{promoCode.description}</p>
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-1">
                <Edit2 className="w-4 h-4 text-green-600" />
                Edit Info
              </button>
              <button className="text-red-500" onClick={() => handleDelete(promoCode.id)}>
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
