import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom"
import { Menu, X } from "lucide-react";
export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleContent = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <nav className="bg-sky-500 text-white fixed w-full top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">จัดโปรแกรมออกกำลังกาย</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        <li><a href="#" className="hover:text-gray-300">หน้าแรก</a></li>
                        <li><a href="#" className="hover:text-gray-300">เกี่ยวกับเรา</a></li>
                        <li><a href="#" className="hover:text-gray-300">ติดต่อเรา</a></li>
                        <li><a href="#" className="hover:text-gray-300">สมัครสมาชิก</a></li>
                        <li><a href="#" className="hover:text-gray-300">เข้าสู่ระบบ</a></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={toggleContent}
                    >
                        {isModalOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isModalOpen && (
                    <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
                        <li><a href="#" className="block py-2">หน้าแรก</a></li>
                        <li><a href="#" className="block py-2">เกี่ยวกับเรา</a></li>
                        <li><a href="#" className="block py-2">ติดต่อเรา</a></li>
                        <li><a href="#" className="block py-2">สมัครสมาชิก</a></li>
                        <li><a href="#" className="block py-2">เข้าสู่ระบบ</a></li>
                    </ul>
                )}
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}