import React, { useEffect, useState } from 'react';


export default function Navbar() {
const [show, setShow] = useState(false);
useEffect(() => {
const handleScroll = () => setShow(window.scrollY > 60);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
return (
<nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${show ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}`}>
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="font-bold text-xl">NETFLIX</div>
</div>
<div className="flex items-center gap-4">
<input className="hidden md:block bg-gray-800 px-3 py-1 rounded" placeholder="Search" />
<img src="https://www.gravatar.com/avatar?d=mp" alt="avatar" className="w-8 h-8 rounded" />
</div>
</div>
</nav>
);
}