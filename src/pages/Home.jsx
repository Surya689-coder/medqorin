import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, BellRing, UserCheck, ArrowRight, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <div className="bg-background dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 shadow-sm border border-primary/20">
                                Next-Gen Healthcare IoT
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                                Smart Medication. <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Safe Living.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                                Intelligent medicine allocation for safer and smarter healthcare. Never miss a dose, prevent overdoses, and keep caregivers in the loop.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/products" className="px-8 py-4 rounded-xl font-bold bg-primary text-white hover:bg-blue-600 transition shadow-lg hover:shadow-xl flex items-center justify-center text-lg">
                                    Explore Products <ArrowRight className="ml-2" size={20} />
                                </Link>
                                <Link to="/about" className="px-8 py-4 rounded-xl font-bold bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm flex items-center justify-center text-lg">
                                    How it Works
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Hidden Crisis in Healthcare</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                Millions of elderly and chronic patients struggle with complex medication schedules. Missed doses delay recovery, while accidental overdoses pose severe health risks. Caregivers face constant anxiety trying to monitor compliance from afar.
                            </p>
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full text-red-600 dark:text-red-400 mt-1">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-xl">Overdose Risks</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Memory loss often leads to double dosing.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                            className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 border border-secondary/20 shadow-xl relative"
                        >
                            <h3 className="text-3xl font-bold mb-4 text-primary">The MEDQORIN Solution</h3>
                            <p className="text-lg mb-6 leading-relaxed">
                                The <strong>Automated Medicine Allocator (AMA)</strong> is a smart IoT device that securely stores, schedules, and dispenses medication exactly when needed.
                            </p>
                            <ul className="space-y-4 font-medium">
                                <li className="flex items-center"><ShieldCheck className="text-secondary mr-3" /> Secure lock mechanism</li>
                                <li className="flex items-center"><Clock className="text-primary mr-3" /> Timed dispensing</li>
                                <li className="flex items-center"><BellRing className="text-accent mr-3" /> Audio & visual alerts</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Showcase */}
            <section className="py-24 bg-background dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Peace of Mind</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Every feature of the AMA is engineered to provide safety for patients and visibility for caregivers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <Clock size={40} />, title: "Automatic Allocation", desc: "Pre-load weeks of medication. The AMA dispenses the right pills at the exact prescribed time." },
                            { icon: <BellRing size={40} />, title: "Smart Alerts", desc: "Loud auditory chimes and bright LED signals ensure the patient knows it's time to take their medicine." },
                            { icon: <UserCheck size={40} />, title: "Caregiver Monitoring", desc: "Real-time updates to the caregiver's dashboard when medicine is taken or missed." },
                        ].map((feature, idx) => (
                            <motion.div key={idx} variants={fadeIn} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary/10 text-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed bg-clip-text">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <HeartPulse size={64} className="mx-auto mb-8 opacity-90" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to upgrade your healthcare?</h2>
                    <p className="text-xl mb-10 opacity-90 leading-relaxed">Join thousands of families who have brought safety and certainty back into their daily lives with MEDQORIN.</p>
                    <Link to="/products" className="inline-block px-10 py-4 bg-white text-primary rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-2xl hover:shadow-white/20">
                        View Pricing & Customize
                    </Link>
                </div>
            </section>

        </div>
    );
}
