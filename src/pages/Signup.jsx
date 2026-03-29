import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { HeartPulse, Mail, Lock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signupWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            const userCredential = await signupWithEmail(email, password);
            // Create user profile in firestore
            try {
                await setDoc(doc(db, "users", userCredential.user.uid), {
                    name: name,
                    email: email,
                    createdAt: new Date().toISOString()
                });
            } catch (firestoreError) {
                // Ignored if using dummy config
                console.warn('Firestore dummy placeholder');
            }
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to create an account: ' + err.message);
        }
        setLoading(false);
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8"
            >
                <div className="text-center mb-8">
                    <HeartPulse size={48} className="mx-auto text-primary" />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Create an Account</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Join the MEDQORIN platform today
                    </p>
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6 text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User size={18} className="text-gray-400" />
                            </div>
                            <input type="text" required value={name} onChange={e => setName(e.target.value)}
                                className="pl-10 block w-full border-gray-300 dark:border-gray-600 rounded-xl focus:ring-primary focus:border-primary sm:text-sm px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white transition"
                                placeholder="John Doe" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={18} className="text-gray-400" />
                            </div>
                            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                                className="pl-10 block w-full border-gray-300 dark:border-gray-600 rounded-xl focus:ring-primary focus:border-primary sm:text-sm px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white transition"
                                placeholder="you@example.com" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-gray-400" />
                            </div>
                            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                                className="pl-10 block w-full border-gray-300 dark:border-gray-600 rounded-xl focus:ring-primary focus:border-primary sm:text-sm px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white transition"
                                placeholder="••••••••" />
                        </div>
                    </div>

                    <button disabled={loading} type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition">
                        Sign Up
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-primary hover:text-blue-500 transition">
                        Log in
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
