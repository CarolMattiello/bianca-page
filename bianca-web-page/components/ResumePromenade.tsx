"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CheckCircle, Heart, Mail, MapPin, Instagram, Facebook } from "lucide-react";

/**
 * PROMENADE:
 * A highly interactive, single-page resume component for a Positive Dog Trainer.
 * Strict Minimalism, High-End Visual Polish, Framer Motion Scroll Animations.
 * 
 * Customize "data" as needed below.
 */

// --- DATA CONFIGURATION ---
const trainerData = {
    name: "Bianca Mattiello",
    title: "Positive Dog Trainer",
    tagline: "Building unbreakable bonds through trust, play, and positive reinforcement.",
    qualifications: [
        {
            year: "2023",
            title: "Certified Professional Dog Trainer (CPDT-KA)",
            description: "Demonstrated mastery of positive training methodologies and canine behavioral science.",
            color: "bg-[#FCE4EC]", // Soft Pink
        },
        {
            year: "2021",
            title: "Fear Free Certified Animal Trainer",
            description: "Specialized in preventing and alleviating fear, anxiety, and stress in pets.",
            color: "bg-[#FFF9C4]", // Soft Yellow
        },
        {
            year: "2019",
            title: "Canine Good Citizen Evaluator",
            description: "AKC-certified to evaluate and train dogs in good citizenship behaviors.",
            color: "bg-[#B2DFDB]", // Soft Turquoise
        },
    ],
    philosophies: [
        {
            title: "Consent-Based",
            description: "We listen to the dog. Allowing choice builds confidence and prevents reactivity.",
            icon: <Heart className="w-8 h-8 text-pink-400" />,
            color: "bg-[#FCE4EC]",
        },
        {
            title: "Force-Free",
            description: "No pain, no fear, no force. Every training session is a positive, rewarding experience.",
            icon: <CheckCircle className="w-8 h-8 text-turquoise-500" />,
            color: "bg-[#B2DFDB]",
        },
        {
            title: "Joyful Learning",
            description: "Training should feel like a game. We optimize for fun and enthusiastic cooperation.",
            icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
            color: "bg-[#FFF9C4]",
        },
    ],
    contact: {
        email: "hello@biancatraining.com",
        location: "São Paulo, SP",
        instagram: "@biancadogtraining",
        facebook: "/biancadogtraining",
    }
};

// --- ANIMATION VARIANTS ---
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const bloom = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
    hidden: { opacity: 0, x: 70 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function ResumePromenade() {
    const containerRef = useRef(null);

    return (
        // We enforce a modern sans-serif. In a real Tailwind config, you might map font-sans to "Quicksand" or "Montserrat".
        <div
            ref={containerRef}
            className="bg-[#FAFAFB] text-neutral-800 font-sans selection:bg-[#FCE4EC] selection:text-neutral-900"
            style={{ fontFamily: "'Montserrat', 'Quicksand', sans-serif" }}
        >

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
                {/* Soft, decorative ambient glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#FCE4EC] rounded-full blur-[100px] opacity-40 pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#B2DFDB] rounded-full blur-[100px] opacity-40 pointer-events-none" />

                <div className="z-10 text-center max-w-3xl">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-6"
                    >
                        {trainerData.title}
                    </motion.p>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={bloom}
                        className="text-5xl sm:text-7xl font-semibold tracking-tight text-neutral-900 mb-8"
                    >
                        {trainerData.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl sm:text-2xl text-neutral-500 font-light leading-relaxed mb-16 max-w-2xl mx-auto"
                    >
                        {trainerData.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <a
                            href="#path"
                            className="inline-flex flex-col items-center group cursor-pointer transition-transform"
                        >
                            <span className="text-sm font-medium tracking-widest uppercase mb-4 text-neutral-500 group-hover:text-neutral-800 transition-colors">
                                Start the Walk
                            </span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-neutral-400 transition-colors group-hover:bg-[#FFF9C4]"
                            >
                                <ArrowDown className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700" />
                            </motion.div>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* --- QUALIFICATIONS PATH --- */}
            <section id="path" className="relative py-32 px-6 sm:px-12 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4">The Journey So Far</h2>
                    <p className="text-neutral-500 text-lg">Milestones along the path to continuous learning.</p>
                </motion.div>

                {/* The visual line */}
                <div className="absolute left-6 md:left-1/2 top-64 bottom-0 w-px bg-neutral-200 transform md:-translate-x-1/2 isolate -z-10" />

                <div className="space-y-24 md:space-y-32">
                    {trainerData.qualifications.map((qual, idx) => {
                        const isEven = idx % 2 === 0;
                        const animationVariant = isEven ? slideLeft : slideRight;

                        return (
                            <div
                                key={idx}
                                className={`relative flex flex-col md:flex-row items-center md:justify-between w-full p-4`}
                            >
                                {/* Visual node on the central line */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-neutral-800 transform -translate-x-1.5 md:-translate-x-2 z-10" />

                                {/* Year tag for mobile - on desktop it's arranged nicely */}
                                <div className={`md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left md:order-last'} pl-8 md:pl-0 w-full mb-4 md:mb-0`}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={fadeUp}
                                        className="inline-block"
                                    >
                                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-neutral-700 ${qual.color}`}>
                                            {qual.year}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className={`md:w-5/12 pl-8 md:pl-0 w-full ${isEven ? 'md:order-first' : 'md:text-left'}`}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={animationVariant}
                                        className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500"
                                    >
                                        <h3 className="text-xl font-medium mb-3 text-neutral-900">{qual.title}</h3>
                                        <p className="text-neutral-500 leading-relaxed font-light">{qual.description}</p>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* --- PHILOSOPHY SECTION --- */}
            <section className="py-32 px-6 sm:px-12 bg-white mt-16 relative overflow-hidden">
                {/* Subtle shape top/bottom */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#FAFAFB] fill-current">
                        <polygon points="0,0 100,0 100,10 0,20" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4">Training Philosophy</h2>
                        <p className="text-neutral-500 text-lg">The core values driving positive reinforcement.</p>
                    </motion.div>

                    {/* Cards bloomed in sequence */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {trainerData.philosophies.map((phil, idx) => (
                            <motion.div
                                key={idx}
                                variants={bloom}
                                className={`p-10 rounded-[2.5rem] flex flex-col items-center text-center ${phil.color} transition-transform hover:-translate-y-2 duration-500`}
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                                    {phil.icon}
                                </div>
                                <h3 className="text-2xl font-medium mb-4 text-neutral-800">{phil.title}</h3>
                                <p className="text-neutral-600 font-light leading-relaxed">{phil.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- END OF TRAIL / CONTACT --- */}
            <section className="py-32 px-6 sm:px-12 bg-[#FAFAFB]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={bloom}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[#FFF9C4] rounded-full mb-10 shadow-sm">
                        <Heart className="w-10 h-10 text-yellow-600" />
                    </div>

                    <h2 className="text-4xl sm:text-6xl font-medium tracking-tight mb-8">End of the Trail.</h2>
                    <p className="text-xl text-neutral-500 font-light mb-16 mx-auto max-w-lg">
                        Ready to bond, play, and learn? Let’s begin your dog's positive reinforcement journey.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <a href={`mailto:${trainerData.contact.email}`} className="flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
                            <Mail className="w-5 h-5" />
                            <span className="font-medium">Get in Touch</span>
                        </a>
                    </div>

                    {/* Footer Socials */}
                    <div className="pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-sm gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> {trainerData.contact.location}
                        </div>

                        <div className="flex gap-6">
                            <a href={trainerData.contact.instagram} className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                                <Instagram className="w-4 h-4" /> Intagram
                            </a>
                            <a href={trainerData.contact.facebook} className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                                <Facebook className="w-4 h-4" /> Facebook
                            </a>
                        </div>

                        <div>&copy; {new Date().getFullYear()} {trainerData.name}. All rights reserved.</div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
