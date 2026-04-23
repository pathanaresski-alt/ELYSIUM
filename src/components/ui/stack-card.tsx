import * as React from "react"
import { motion } from "motion/react"
import type { Variants } from "motion/react"
import { Scissors, Sparkles, Droplets, Zap, User, ShoppingBag, ShieldCheck, Camera } from "lucide-react"

export function ScrollTriggered() {
    return (
        <div className="w-full flex flex-col items-center" style={container}>
            <div className="text-center mb-12">
                <span className="text-brand-orange text-[9px] font-black uppercase tracking-[0.8em] block mb-3">Tactile Records</span>
                <h3 className="text-3xl md:text-5xl font-bento-title uppercase">Editorial Stack.</h3>
            </div>
            {SALON_RECORDS.map(([icon, hueA, hueB, label], i) => (
                <Card i={i} icon={icon} hueA={hueA} hueB={hueB} label={label} key={i} />
            ))}
        </div>
    )
}

interface CardProps {
    icon: React.ReactNode
    hueA: number
    hueB: number
    label: string
    i: number
    key?: React.Key
}

function Card({ icon, hueA, hueB, label, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i} w-full flex justify-center items-center relative overflow-hidden`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8, once: false }}
        >
            <div style={{ ...splash, background }} className="opacity-40" />
            <motion.div style={card} variants={cardVariants} className="card flex flex-col gap-4 border border-white/10">
                <div className="text-black">
                    {icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
                    {label}
                </span>
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
        rotate: 0
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

const container: React.CSSProperties = {
    margin: "40px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    paddingTop: 20,
    marginBottom: -160,
    height: 500,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 50,
    left: "10%",
    right: "10%",
    bottom: 50,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    width: 280,
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    background: "#f5f5f5",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    transformOrigin: "10% 60%",
    zIndex: 20
}

const SALON_RECORDS: [React.ReactNode, number, number, string][] = [
    [<Scissors size={80} />, 20, 40, "Precision Cut"],
    [<Sparkles size={80} />, 340, 10, "Couture Glow"],
    [<Droplets size={80} />, 205, 245, "Hydro Ritual"],
    [<Zap size={80} />, 60, 90, "B3 Energy"],
    [<Camera size={80} />, 260, 290, "Editorial Shot"],
    [<User size={80} />, 100, 140, "Identity Design"],
]
