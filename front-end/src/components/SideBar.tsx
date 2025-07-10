import { useState } from "react"

//tipagem dos icones
import type { IconType } from "react-icons";

//Icons
import { MdMenuOpen } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";


type MenuItem= {
    label: string;
    icon: IconType;
};

const menuItems: MenuItem[]= [
    { 
        label: "Produtos", 
        icon: FiPackage
    },
    { 
        label: "Transições", 
        icon: GrTransaction
    },
    { 
        label: "Relatôrio", 
        icon: TbReportAnalytics
    },
]



export function SideBar() {
    
    //const [open, setOpen]= useState(true)

    return(
        <nav className='shadow-md h-screen w-50 bg-blue-600' >
            <div className='lg:flex-1 px-3 py-2 h-20 flex items-center justify-end'>
                <MdMenuOpen  size={34} className="text-blue-300 cursor-pointer "/>
            </div>
            <ul className="flex flex-col mt-40"> 
                {
                    menuItems.map((item, index)=> {
                        return (
                            <li key={index} className="flex px-3 py-2 my-2 hover:bg-blue-300 rounded-md cursor-pointer gap-2 items-center relative group">
                                <item.icon size={30} className="text-blue-400 group-hover:text-blue-600 cursor-pointer "/>
                                <span className="font-inter text-blue-400 text-xl group-hover:text-blue-600">{item.label}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
   )
};