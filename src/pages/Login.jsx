import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { HeartPulse, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { loginWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await loginWithEmail(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to log in: ' + err.message);
        }
        setLoading(false);
    }

    async function handleSocialLogin(providerLogin) {
        try {
            setError('');
            setLoading(true);
            await providerLogin();
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to log in with social account.');
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
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Sign in to your MEDQORIN account
                    </p>
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6 text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        Sign In
                    </button>
                </form>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button onClick={() => handleSocialLogin(loginWithGoogle)} className="w-full inline-flex justify-center flex-col items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                            <span className="text-lg font-bold">G</span> Google
                        </button>
                        <button onClick={() => handleSocialLogin(loginWithFacebook)} className="w-full inline-flex justify-center flex-col items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                            <span className="text-lg font-bold text-blue-600">f</span> Facebook
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-primary hover:text-blue-500 transition">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
