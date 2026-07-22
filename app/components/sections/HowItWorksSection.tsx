import React from "react";
import { AnimatedSection } from "../LandscapeProductCard";

export default function HowItWorksSection() {
    const steps = [
        {
            num: "01", title: "Pilih & Selesaikan Pesanan",
            desc: "Pilih dari delapan format kado digital kami, isi data diri, dan selesaikan pembayaran dengan aman.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        },
        {
            num: "02", title: "Cek Email & Masuk Studio",
            desc: "Link akses eksklusif akan langsung dikirim ke emailmu. Buka linknya, lalu upload foto, lagu, atau rekam suara.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        },
        {
            num: "03", title: "Kirim & Surprise!",
            desc: "Kado digitalmu siap dalam hitungan menit! Dapatkan link unik dengan passcode untuk dikirimkan ke orang tersayang.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        },
    ];

    return (
        <section className="bg-gray-600" id="cara-kerja" style={{ position: "relative", zIndex: 1, padding: "40px 0 120px",  overflow: "hidden" }}>
            {/* Ambient glow accents — pengganti pola dot lama, memberi karakter visual sendiri */}
            <div style={{
                position: "absolute", top: "-10%", left: "-5%", width: 420, height: 420,
                borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,0.10) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0,
            }} />
            <div style={{
                position: "absolute", bottom: "-15%", right: "-8%", width: 480, height: 480,
                borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0,
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", position: "relative", zIndex: 1 }}>

                <AnimatedSection>
                    <div style={{ textAlign: "center", marginBottom: 80 }}>
                        <span style={{
                            fontFamily: "var(--font-sans)", fontSize: 8.5, fontWeight: 700,
                            letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#ffff",
                            display: "inline-block", padding: "6px 20px",
                            border: "1.2px solid rgba(212,165,116,0.3)", borderRadius: 999,
                            marginBottom: 28,
                        }}>
                            Workflow
                        </span>
                        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 400, color: "#f5ede4", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
                            Semudah<br />
                            <span style={{ fontStyle: "italic", color: "#ffff" }}> Tiga Langkah.</span>
                        </h2>
                    </div>
                </AnimatedSection>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
                    {steps.map((step, i) => (
                        <AnimatedSection key={i} delay={i * 120}>
                            <div style={{
                                position: "relative",
                                padding: "44px 32px 36px",
                                background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                                backdropFilter: "blur(20px)",
                                borderRadius: 18,
                                border: "1px solid rgba(212,165,116,0.16)",
                                boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)",
                                height: "100%",
                                overflow: "hidden",
                                transition: "all 0.4s ease",
                            }}>
                                {/* Nomor besar transparan di pojok — elemen dekoratif baru */}
                                <span style={{
                                    position: "absolute", top: -18, right: 4,
                                    fontFamily: "var(--font-display)", fontSize: "5.5rem", fontWeight: 400,
                                    color: "#ffff", lineHeight: 1, userSelect: "none",
                                }}>
                                    {step.num}
                                </span>

                                <div style={{
                                    width: 44, height: 44, borderRadius: 12,
                                    background: "rgba(212,165,116,0.12)",
                                    border: "1px solid rgba(212,165,116,0.25)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#ffff", marginBottom: 28,
                                }}>
                                    {step.icon}
                                </div>

                                <span style={{
                                    fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700,
                                    letterSpacing: "0.15em", color: "#ffff", textTransform: "uppercase" as const,
                                }}>
                                    Langkah {step.num}
                                </span>

                                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 400, color: "#f5ede4", margin: "10px 0 14px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#b8a99b", lineHeight: 1.7, margin: 0, position: "relative", zIndex: 1 }}>
                                    {step.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}