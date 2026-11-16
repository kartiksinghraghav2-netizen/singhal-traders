"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, BadgeCheck, ChevronDown, Menu, MessageCircle, Search, ShieldCheck, ShoppingBag, Truck, X, Zap } from "lucide-react";

type Product = { name: string; category: string; brand: string; model: string; image: string; tag?: string; description: string };
const products: Product[] = [
  { name: "Split Air Conditioner", category: "Air Conditioners", brand: "Indian & leading brands", model: "AC Series", image: "https://images.unsplash.com/photo-1631545806609-7c5f7f3f4d5b?auto=format&fit=crop&w=900&q=85", tag: "Cooling", description: "Efficient cooling options for homes and offices." },
  { name: "Double Door Refrigerator", category: "Refrigerators", brand: "Multiple brands", model: "RF Series", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=85", tag: "Popular", description: "Practical storage and reliable everyday performance." },
  { name: "Fully Automatic Washing Machine", category: "Washing Machines", brand: "Multiple brands", model: "WM Series", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=85", description: "Convenient laundry solutions for every household." },
  { name: "Steam & Dry Iron", category: "Irons", brand: "Multiple brands", model: "IR Series", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=85", description: "Everyday garment-care essentials." },
  { name: "Mixer Grinder", category: "Kitchen Appliances", brand: "Multiple brands", model: "KG Series", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=85", description: "Useful kitchen appliances for daily cooking." },
  { name: "Ceiling Fan", category: "Home Appliances", brand: "Multiple brands", model: "HF Series", image: "https://images.unsplash.com/photo-1631545806609-7c5f7f3f4d5b?auto=format&fit=crop&w=900&q=85", description: "Comfort-focused essentials for your home." },
];
const categories = [
  { name: "Air Conditioners", count: "Cooling solutions", icon: "❄", image: "https://images.unsplash.com/photo-1631545806609-7c5f7f3f4d5b?auto=format&fit=crop&w=700&q=80" },
  { name: "Refrigerators", count: "Freshness & storage", icon: "▯", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=700&q=80" },
  { name: "Washing Machines", count: "Laundry made easy", icon: "◉", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=700&q=80" },
  { name: "Irons", count: "Garment care", icon: "⌁", image: "https://images.unsplash.com/photo-1584990347449-a3d5b6b4f9c4?auto=format&fit=crop&w=700&q=80" },
  { name: "Kitchen Appliances", count: "Everyday kitchen", icon: "✳", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=80" },
  { name: "Home Appliances", count: "More for your home", icon: "⌂", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80" },
];
const waNumber = ""; // WhatsApp number not supplied yet. Add country code and digits when confirmed.
function enquire(product?: string) {
  const message = product ? `Hello Singhal Traders, I would like to enquire about ${product}. Please share the price and details.` : "Hello Singhal Traders, I would like to know more about your products.";
  if (!waNumber) { window.alert("WhatsApp contact details will be added soon. Please visit Singhal Traders in Jaipur, Rajasthan."); return; }
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Home() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const filtered = useMemo(() => products.filter(p => (active === "All" || p.category === active) && `${p.name} ${p.category} ${p.brand}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
  return <main>
    <div className="announcement">Your home, better equipped. <span>Retail & bulk enquiries welcome</span></div>
    <header className="header">
      <a className="brand" href="#"><span className="brand-mark">ST</span><span><b>SINGHAL TRADERS</b><small>HOME APPLIANCES & ELECTRONICS</small></span></a>
      <nav className={mobileOpen ? "nav nav-open" : "nav"}><a href="#categories" onClick={()=>setMobileOpen(false)}>Categories</a><a href="#products" onClick={()=>setMobileOpen(false)}>Our products</a><a href="#about" onClick={()=>setMobileOpen(false)}>About us</a><a href="#contact" onClick={()=>setMobileOpen(false)}>Contact</a></nav>
      <button className="header-cta" onClick={()=>enquire()}><MessageCircle size={17}/> Enquire now</button>
      <button className="menu-btn" aria-label="Toggle menu" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span/> YOUR EVERYDAY APPLIANCE DESTINATION</div>
        <h1>Smart choices for<br/><em>better living.</em></h1>
        <p>Explore dependable electronics and home appliances for every corner of your home. Find the right product with a team ready to help.</p>
        <div className="hero-actions"><a className="primary-btn" href="#products">Explore products <ArrowRight size={18}/></a><button className="text-btn" onClick={()=>enquire()}>Talk to our team <ArrowUpRight size={17}/></button></div>
        <div className="hero-proof"><span><ShieldCheck size={17}/> Product guidance</span><span><BadgeCheck size={17}/> Retail & wholesale</span></div>
      </div>
      <div className="hero-visual"><div className="hero-image"></div><div className="hero-note"><span className="note-icon"><Zap size={19}/></span><div><b>Made for everyday life</b><small>Appliances that work for you</small></div></div><div className="hero-stamp">SIMPLE<br/>. SMART.<br/> SINGHAL.</div></div>
    </section>

    <section className="trust-strip"><div><Truck/><span><b>Retail & bulk orders</b><small>Enquiries for every requirement</small></span></div><div><ShieldCheck/><span><b>Helpful product guidance</b><small>Choose with confidence</small></span></div><div><MessageCircle/><span><b>Direct assistance</b><small>Connect with our team</small></span></div></section>

    <section className="section categories-section" id="categories"><div className="section-heading"><div><div className="eyebrow">SHOP BY CATEGORY</div><h2>Find what your home needs.</h2></div><a href="#products" className="under-link">View all products <ArrowUpRight size={16}/></a></div><div className="category-grid">{categories.map(c=><button className="category-card" key={c.name} onClick={()=>{setActive(c.name);document.getElementById("products")?.scrollIntoView({behavior:"smooth"});}}><img src={c.image} alt="" /><span className="category-shade"/><span className="category-content"><small>{c.count}</small><b>{c.name}</b></span><span className="category-arrow"><ArrowUpRight size={18}/></span></button>)}</div></section>

    <section className="products-section" id="products"><div className="section"><div className="section-heading"><div><div className="eyebrow">OUR PRODUCT RANGE</div><h2>Good products. Everyday value.</h2><p className="section-sub">Browse our range and ask us for current models, availability and pricing.</p></div><div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..."/></div></div>
      <div className="filters"><button className={active==="All"?"filter active":"filter"} onClick={()=>setActive("All")}>All products</button>{categories.map(c=><button key={c.name} className={active===c.name?"filter active":"filter"} onClick={()=>setActive(c.name)}>{c.name}</button>)}</div>
      <div className="product-grid">{filtered.map((p,i)=><article className="product-card" key={p.name}><div className="product-image"><img src={p.image} alt={p.name}/>{p.tag&&<span className="product-tag">{p.tag}</span>}<button className="quick-enquire" onClick={()=>enquire(p.name)} aria-label={`Enquire about ${p.name}`}><ArrowUpRight size={18}/></button></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p>{p.description}</p><div className="product-bottom"><span>Brand options on request</span><button onClick={()=>enquire(p.name)}>Request price <ArrowRight size={15}/></button></div></div></article>)}</div>
      {filtered.length===0&&<div className="empty-state">No products match your search. Try another category or keyword.</div>}
      <div className="catalog-note">Product images and listings are illustrative. Contact us to confirm available brands, models, specifications, stock and prices. Prices are shared on request.</div>
    </div></section>

    <section className="brand-band"><div><div className="eyebrow light">BRANDS & OPTIONS</div><h2>Choice that fits your needs.</h2><p>Ask us about available Indian brands, product models and options across our appliance range.</p></div><button className="light-btn" onClick={()=>enquire("available brands and product range")}>Ask about brands <ArrowUpRight size={17}/></button></section>

    <section className="about-section section" id="about"><div className="about-photo"></div><div className="about-copy"><div className="eyebrow">A MORE HELPFUL WAY TO SHOP</div><h2>Appliance shopping,<br/><em>made simpler.</em></h2><p>At Singhal Traders, we aim to make finding everyday electronics and home appliances straightforward. Whether you are choosing one appliance for your home or enquiring about multiple units for your business, our team is here to help.</p><div className="about-points"><span><BadgeCheck/> Personal assistance</span><span><BadgeCheck/> Retail and wholesale enquiries</span><span><BadgeCheck/> Product options across categories</span></div><button className="primary-btn" onClick={()=>enquire()}>Get in touch <ArrowRight size={18}/></button></div></section>

    <section className="contact-section" id="contact"><div className="contact-inner"><div><div className="eyebrow light">LET'S FIND THE RIGHT FIT</div><h2>Have a product<br/>in mind?</h2><p>Tell us what you are looking for. Connect with Singhal Traders for product details, availability and quotations.</p></div><div className="contact-card"><span className="contact-icon"><MessageCircle size={24}/></span><h3>We're one message away.</h3><p>Send us your requirement and our team can help you with the next steps.</p><button className="primary-btn" onClick={()=>enquire()}>Enquire on WhatsApp <ArrowUpRight size={18}/></button><small>For retail purchases and bulk requirements</small><div className="contact-location">Jaipur, Rajasthan</div></div></div></section>

    <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#"><span className="brand-mark">ST</span><span><b>SINGHAL TRADERS</b><small>HOME APPLIANCES & ELECTRONICS</small></span></a><p>Everyday electronics and home appliances, with helpful service for retail and wholesale buyers.</p><div className="footer-links"><a href="#categories">Categories</a><a href="#products">Products</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Singhal Traders. All rights reserved.</span><span>Jaipur, Rajasthan&nbsp; · &nbsp;Website by <b>B2B Help</b></span></div></footer>
  </main>;
}