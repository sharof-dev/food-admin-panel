import { Search } from "lucide-react"
import { FC } from "react"

interface PromoFilterProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
  }

const PromoFilter: FC<PromoFilterProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <div className="flex justify-between items-center bg-white mb-6 p-3 rounded-l-2xl">
                <div className="relative">
                    <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        className="pr-4 pl-10 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 h-10"
                    />
                </div>
                <div className="flex items-center gap-6">
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
                        Add Promo Codes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PromoFilter
