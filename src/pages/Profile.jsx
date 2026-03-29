import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Save, CheckCircle2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function Profile() {
    const { currentUser } = useAuth();

    const [profile, setProfile] = useState({
        name: currentUser?.displayName || currentUser?.email?.split('@')[0] || '',
        phone: '',
        address: '',
        caregiverPhone: ''
    });

    const [saved, setSaved] = useState(false);

    if (!currentUser) return <Navigate to="/login" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-background dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">My Profile</h1>

                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 space-y-6">
                    <div className="flex items-center space-x-6 mb-10 pb-8 border-b border-gray-100 dark:border-gray-700">
                        <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center text-4xl font-bold shadow-inner">
                            {profile.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{profile.name}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mt-1">{currentUser?.email}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                            <input type="text" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                            <input type="text" value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })} className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="+91 00000 00000" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Shipping Address</label>
                            <textarea rows={3} value={profile.address} onChange={e => setProfile({ ...profile, address: e.target.value })} className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none" placeholder="Enter full address" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Caregiver Phone Number (For Emergency Alerts)</label>
                            <input type="text" value={profile.caregiverPhone} onChange={e => setProfile({ ...profile, caregiverPhone: e.target.value })} className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="+91 00000 00000" />
                        </div>
                    </div>

                    <div className="pt-6 flex justify-between items-center border-t border-gray-100 dark:border-gray-700 mt-8 pt-8">
                        <div>
                            {saved && <span className="text-green-500 font-medium flex items-center"><CheckCircle2 className="mr-2" size={20} /> Success</span>}
                        </div>
                        <button type="submit" className="flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition shadow-lg hover:shadow-xl">
                            <Save size={20} className="mr-2" /> Save Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
