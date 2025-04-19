import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import Loading_logo from "../../assets/icon/Transparent_logo";
import "./login.css"
import { FC, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setItem } from "../../lib/utils/storage";
import { useNavigate } from "react-router-dom";
const Login:FC= () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState<string>("password");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (email === "admin@e.com" && password === "password") {
      alert("true")
      setItem("auth", "false")
      navigate('/')
    } else {
      alert("Email yoki parol noto'g'ri!")
    }
  }

  const showPassword = (e: any) => {
    e.preventDefault();
    setShowPwd(showPwd === "password" ? "text" : "password");
  }
  return (
    <div className="flex h-screen">
      <div className="bg-image px-4 py-4 md:w-1/2">
        <Loading_logo />
      </div>
      <div className="flex flex-col justify-center items-center md:w-1/2">
        <h1 className="mb-1 font-semibold text-gray-500 text-2xl">Kirish</h1>
        <p className="mb-5 text-gray-400 text-xs">Xush Kelibsiz! Iltimos Ma'lumotlaringizni kiriting.</p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 pr-4 pl-10 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64" />
            <MdOutlineEmail className="top-3 left-1 absolute w-8" />
          </div>
          <div className="relative mb-3">
            <input
              type={showPwd}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parol"
              className="py-2 pr-4 pl-10 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64" />
            <MdLockOutline className="top-3 left-1 absolute w-8" />
            <button
              onClick={e => showPassword(e)}
              type="button"
              className="top-3 right-3 absolute w-4 h-4 text-gray-400"
            >
              {showPwd !== "password" ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="flex justify-end">
            <a
              href="#"
              className="right-0 relative items-end mb-6 text-[#2B964F]"
            >Parolni Tiklash</a>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 mt-4 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64 text-white"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
