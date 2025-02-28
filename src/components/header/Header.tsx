import { FC } from "react"
import { RiNotification3Line, RiSearchLine } from "react-icons/ri";
import { useLocation } from "react-router-dom"

const Header: FC = () => {
    const path = useLocation().pathname.slice(1);
    const capitalizedParam = path ? path.charAt(0).toUpperCase() + path.slice(1) : "Dashboard"

    return (
        <header className="bg-white border-gray-200 border-b border-l">
            <div className="flex justify-between items-center px-6 py-[1.40rem]">
                <h1 className="font-semibold text-gray-800 text-xl">{capitalizedParam}</h1>
                <div className="flex gap-5">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Qidirish..."
                                id="search"
                                className="py-2 pr-4 pl-10 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                            />
                            <RiSearchLine className="top-2.5 left-3 absolute text-gray-400" />

                        </div>
                    </div>

                    <button className="relative p-2 focus:outline-none text-gray-500 hover:text-gray-700">
                        <RiNotification3Line size={20} />
                        <span className="top-1 right-1 absolute bg-red-500 rounded-full w-2 h-2"></span>
                    </button>

                    <div className="flex items-center">
                        <div className="bg-gray-300 rounded-full w-8 h-8 overflow-hidden">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="ml-2">
                            <p className="font-medium text-sm">Angela L.</p>
                            <p className="text-xs">Adminstrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
