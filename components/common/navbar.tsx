import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'


export default function Navbar(){

    const links = [
        {
            href: "/",
            text: "Home",
            Icon: true,
        },
        {
            href: "/menu",
            text: "MENU",
            Icon: true,
        },
        {
            href: "/shop",
            text: "SHOP",
            Icon: true,
        },
        {
            href: "/pages",
            text: "PAGES",
            Icon: true,
        },
        {
            href: "/news",
            text: "NEWS",
            Icon: true,
        },
        {
            href: "/contactUs",
            text: "CONTACT US",
            Icon: false,
        },
    ]

    return (
       <div>
            <div className="container mx-auto flex justify-between items-center py-4">
                <span>Logo</span>
               <ul className="flex gap-10 items-center">
                {links.map(({href, text, Icon}, i)=>(
                    <li className="flex items-center gap-1" key={i}>
                        <Link href={href}>{text}</Link>
                        {Icon && <FaPlus className="text-xs text-green-500"/>}
                    </li>
                ))}
               </ul>
               <Button className="bg-green-700 flex gap-2 uppercase">
                book a table
                <FaArrowRight/>
                </Button>
            </div>
       </div>
    )
}