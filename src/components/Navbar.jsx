import { Button } from "@heroui/react";
import Link from "next/link";
import { FaBriefcaseMedical } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" bg-[#f8f9ff] h-16 px-6 flex items-center justify-between border-b-[1.5px] border-[#C3C6D7]/50 ">
            <Link href={'/'}>
            <h1 className="text-2xl font-bold primary  main-title flex items-center gap-1"><FaBriefcaseMedical />
                DocAppoint</h1>
            </Link>
            <div className="hidden md:block">
                <ul className="flex items-center gap-5">
                    <Link href={"/"} className="primary border-b border-[#004AC6] text-sm font-medium hover:text-[#004AC6]/80!">Home</Link>
                    <Link href={"/appointments"} className="text text-sm font-medium hover:text-[#0B1C30]!">All Appointments</Link>
                    <Link href={"/dashboard"} className="text text-sm font-medium hover:text-[#0B1C30]!">Dashboard</Link> 
                </ul>
               
            </div>
             <div className="flex items-center gap-3">
                <Link href={"/login"}>
                    <Button variant="ghost" className="text-sm font-medium primary rounded-2xl ">Login</Button>
                </Link>
                <Link href={"/register"}>
                    <Button variant="" className="text-sm font-medium bg-[#004AC6] rounded-2xl  text-white">Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;