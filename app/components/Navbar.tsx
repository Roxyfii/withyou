"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const { cartCount, openDrawer } = useCart();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Home", href: "/" },
        { label: "Catalog", href: "/catalog" },
        { label: "Cara Kerja", href: "/#cara-kerja" },
        { label: "Testimoni", href: "/#testimoni" },
    ];

    const mobileLinks = [
        { label: "Catalog", href: "/catalog" },
        { label: "Cara Kerja", href: "/#cara-kerja" },
        { label: "Testimoni", href: "/#testimoni" },
        { label: "FAQ", href: "/#faq" },
    ];

    return (
        <>
            {/* ── Wrapper: full width container, centers the pill ── */}
            <div style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 10000,
                display: "flex", justifyContent: "center",
                padding: scrolled ? "10px 20px 0" : "16px 20px 0",
                transition: "padding 0.4s ease",
                pointerEvents: "none",
                background: "transparent",
            }}>
                <nav style={{
                    pointerEvents: "auto",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%",
                    maxWidth: 1100,
                    height: 52,
                    padding: "0 16px 0 16px",
                    background: "rgba(20,16,14,0.92)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    WebkitBackdropFilter: "blur(24px) saturate(180%)",
                    border: "1px solid rgba(205,171,143,0.18)",
                    borderRadius: 999,
                    boxShadow: scrolled
                        ? "0 8px 32px -8px rgba(0,0,0,0.5), 0 2px 8px -2px rgba(0,0,0,0.3)"
                        : "0 4px 16px -4px rgba(0,0,0,0.35)",
                    transition: "all 0.4s ease",
                }}>
                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0, position: "relative", zIndex: 10 }}>
                        <div style={{ position: "relative", width: 26, height: 26, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(205,171,143,0.3)" }}>
                            <Image src="/logo.png" alt="Logo" fill unoptimized={true} style={{ objectFit: "cover" }} sizes="26px" />
                        </div>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#f5ede4", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
                            With you
                        </span>
                    </Link>

                    {/* Desktop links — center */}
                    <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop-links">
                        {links.map(l => {
                            const isActive = pathname === l.href;
                            return (
                                <Link key={l.href} href={l.href} style={{
                                    fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700,
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                    color: isActive ? "#d4a574" : "#b8a99b", textDecoration: "none",
                                    transition: "color 0.2s ease",
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#d4a574"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? "#d4a574" : "#b8a99b"; }}
                                >
                                    {l.label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile quick links — center */}
                    <div style={{ alignItems: "center", gap: 16 }} className="nav-mobile-quicklinks">
                        <Link href="/" style={{
                            fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700,
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            color: pathname === "/" ? "#d4a574" : "#b8a99b", textDecoration: "none",
                        }}>HOME</Link>
                        <Link href="/catalog" style={{
                            fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700,
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            color: pathname === "/catalog" || pathname.startsWith("/catalog/") ? "#d4a574" : "#b8a99b", textDecoration: "none",
                        }}>CATALOG</Link>
                    </div>

                    {/* CTA + Hamburger */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        {/* Cart Icon Button */}
                        <button
                            onClick={openDrawer}
                            aria-label="Keranjang"
                            style={{
                                position: "relative",
                                background: cartCount > 0 ? "rgba(212,165,116,0.15)" : "transparent",
                                border: "1px solid rgba(205,171,143,0.22)",
                                borderRadius: 999,
                                width: 36, height: 36,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                cursor: "pointer",
                                color: cartCount > 0 ? "#d4a574" : "#b8a99b",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(212,165,116,0.2)"; (e.currentTarget as HTMLElement).style.color = "#d4a574"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = cartCount > 0 ? "rgba(212,165,116,0.15)" : "transparent"; (e.currentTarget as HTMLElement).style.color = cartCount > 0 ? "#d4a574" : "#b8a99b"; }}
                        >
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartCount > 0 && (
                                <span style={{
                                    position: "absolute", top: -4, right: -4,
                                    background: "#e63e63",
                                    color: "#fff",
                                    fontSize: 9, fontWeight: 800,
                                    width: 16, height: 16,
                                    borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: "2px solid #14100e",
                                    fontFamily: "var(--font-sans)",
                                    lineHeight: 1,
                                    letterSpacing: 0,
                                }}>
                                    {cartCount > 9 ? "9+" : cartCount}
                                </span>
                            )}
                        </button>

                        <a href="https://wa.me/6289602203266?text=Halo%20Digital%20studios!%20Saya%20ingin%20order." target="_blank" rel="noopener noreferrer"
                            style={{
                                padding: "7px 18px", borderRadius: 999,
                                background: "#d4a574", color: "#1a1412",
                                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                                textDecoration: "none", transition: "all 0.3s ease", whiteSpace: "nowrap",
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8bb8c"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#d4a574"; }}
                            className="nav-cta"
                        >
                            Order
                        </a>
                        {/* Hamburger */}
                        <button
                            onClick={() => setMobileOpen(v => !v)}
                            className="nav-hamburger"
                            style={{
                                background: "rgba(205,171,143,0.1)", border: "1px solid rgba(205,171,143,0.22)",
                                borderRadius: 999, cursor: "pointer",
                                width: 34, height: 34,
                                display: "flex", flexDirection: "column", gap: 4, alignItems: "center", justifyContent: "center",
                                transition: "background 0.2s ease",
                            }}
                            aria-label="Toggle menu"
                        >
                            <span style={{ display: "block", width: 16, height: 1.5, background: "#f5ede4", transition: "all 0.3s ease", transform: mobileOpen ? "translateY(5.5px) rotate(45deg)" : "none" }} />
                            <span style={{ display: "block", width: 16, height: 1.5, background: "#f5ede4", transition: "all 0.3s ease", opacity: mobileOpen ? 0 : 1 }} />
                            <span style={{ display: "block", width: 16, height: 1.5, background: "#f5ede4", transition: "all 0.3s ease", transform: mobileOpen ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile dropdown menu */}
            <div style={{
                position: "fixed", top: scrolled ? 74 : 80, left: 20, right: 20, zIndex: 998,
                background: "rgba(20,16,14,0.98)", backdropFilter: "blur(24px)",
                border: mobileOpen ? "1px solid rgba(205,171,143,0.18)" : "none",
                opacity: mobileOpen ? 1 : 0,
                borderRadius: 20,
                padding: mobileOpen ? "20px 24px 24px" : "0 24px",
                maxHeight: mobileOpen ? 400 : 0,
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: mobileOpen ? "0 12px 40px -8px rgba(0,0,0,0.5)" : "none",
                pointerEvents: mobileOpen ? "auto" : "none",
            }} className="nav-mobile-dropdown">
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {mobileLinks.map(l => (
                        <Link key={l.href} href={l.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700,
                                letterSpacing: "0.08em", textTransform: "uppercase",
                                color: "#f5ede4", textDecoration: "none",
                                padding: "13px 0",
                                borderBottom: "1px solid rgba(245,237,228,0.08)",
                                transition: "color 0.2s ease",
                            }}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <a href="https://wa.me/6289602203266?text=Halo%20Digital%20studios!%20Saya%20ingin%20order." target="_blank" rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        style={{
                            marginTop: 16, display: "inline-flex", alignItems: "center", justifyContent: "center",
                            padding: "12px 28px", borderRadius: 999,
                            background: "#d4a574", color: "#1a1412",
                            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                            textDecoration: "none",
                        }}
                    >
                        Order via WhatsApp
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .nav-desktop-links { display: none !important; }
                    .nav-cta { display: none !important; }
                    .nav-hamburger { display: flex !important; }
                    .nav-mobile-quicklinks { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .nav-hamburger { display: none !important; }
                    .nav-mobile-dropdown { display: none !important; }
                    .nav-mobile-quicklinks { display: none !important; }
                }
            `}</style>
        </>
    );
}