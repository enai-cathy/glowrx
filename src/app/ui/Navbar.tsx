'use client'
import { useState } from "react";
import { NavLinks } from "./nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";


export function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);


return (
<nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
{/* Logo */}
<div className="text-2xl md:text-xl font-bold">GlowRx</div>


{/* Desktop Nav */}
<div className="hidden md:flex items-center space-x-6">
<NavLinks />
<Link
href = '/login'
className="shadow transition px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800">
Start Now
</Link>
</div>


{/* Mobile */}
<div className="flex items-center space-x-4 md:hidden">
<Link 
href="/login"
className="shadow transition px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800">
Start Now
</Link>


<button onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
</div>


{/* Mobile Menu */}
{menuOpen && (
<div className="absolute top-16 right-6 bg-white shadow-lg rounded-xl p-6 w-48 md:hidden">
<NavLinks onClick={() => setMenuOpen(false)} />
</div>
)}
</nav>
);
}