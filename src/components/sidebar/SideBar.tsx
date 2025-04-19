import {
  RiCoupon3Line,
  RiFileChartLine,
  RiMessage2Line,
  RiSettings4Line,
  RiShoppingBag3Line,
  RiTruckLine,
  RiUserLine
} from "react-icons/ri";
import Logo from "../../assets/image/Logo.png"
import { SideBarProps } from "../../types/sidebar/sidebar";
import classNames from "classnames"
import { FC } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../lib/utils/storage";
const SideBar: FC<SideBarProps> = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <AiOutlineAppstore size={20} />, badge: '10', path: 'dashboard' },
    { name: 'Product Management', icon: <RiShoppingBag3Line size={20} />, path: 'product-management'},
    { name: 'User Management', icon: <RiUserLine size={20} />, path: 'user-management'},
    { name: 'Promo Codes', icon: <RiCoupon3Line size={20} />, path: 'promo-code'},
    { name: 'Reports', icon: <RiFileChartLine size={20} />, path: 'reports'},
    { name: 'Delivery Management', icon: <RiTruckLine size={20} />,path: 'delivery-management'},
    { name: 'Messages & Chats', icon: <RiMessage2Line size={20} />, badge: '5', path: 'message-chats'},
    { name: 'System Settings', icon: <RiSettings4Line size={20} />, path: 'settings'},
    { name: 'logout', icon: <RiSettings4Line size={20} />, path: ''},
  ];
  const navigate = useNavigate();

  const handleClick = (path: string, name: string) => {
    setActiveMenu(name);
    navigate(path);
    if(name === 'logout') {
      removeItem("auth")
    }
  };

  return (
    <div className="bg-white w-64 h-full">
      <div className="flex items-center p-4 border-gray-200 border-b">
        <img src={Logo} alt="logo" width={157.64} />
      </div>
      <div className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-2 px-4">
          {menuItems.map(item => (
            <li key={item.name} >
              <button
                onClick={() => handleClick(item.path, item.name)}
                className={classNames("flex items-center w-full  px-4 py-3 text-sm rounded-lg", activeMenu === item.name ? "text-[#2B964F]" : "text-gray-600")}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
