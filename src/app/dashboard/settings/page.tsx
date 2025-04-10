import React from 'react';
import Link from 'next/link';

function Settings() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Settings</h2>
                    <p className="text-gray-600">
                        Customize your account settings, profile, and notifications here. Choose an option from the sidebar to begin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/dashboard/settings/accountSetting" className="block text-blue-600 hover:underline">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/settings/notifications" className="block text-blue-600 hover:underline">
                                    Notifications
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/settings/profile" className="block text-blue-600 hover:underline">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Select a setting</h2>
                        <p className="text-gray-600">
                            Choose an option from the sidebar to manage your account, notifications, or profile settings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
