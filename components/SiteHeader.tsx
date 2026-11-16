"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
const links=[["Home","/"],["Products","/products"],["Categories","/categories"],["Brands","/brands"],["About","/about"],["Contact","/contact"]];
export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <><div className="announcement">A better way to explore home appliances <span>Retail & bulk enquiries welcome</span></div><header className="header"><Link className="brand" href="/"><span className="brand-mark">ST</span><span><b>SINGHAL TRADERS</b><small>HOME APPLIANCES & ELECTRONICS</small></span></Link><nav className={open?"nav nav-open":"nav"}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="header-cta" href="/contact"><MessageCircle size={17}/> Enquire now</Link><button className="menu-btn" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header></>;
}