import React from 'react';
import Link from 'next/link';

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                    <p className="text-gray-600 text-lg mt-3">Overview of your workspace</p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Tasks Card */}
                    <Link href="/dashboard/tasks" className="block">
                        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold text-blue-600">Tasks</h2>
                                <span className="text-2xl">📝</span>
                            </div>
                            <p className="text-gray-600">View, organize and manage daily tasks</p>
                        </div>
                    </Link>

                    {/* Analytics Card */}
                    <Link href="/dashboard/analytics" className="block">
                        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold text-green-600">Analytics</h2>
                                <span className="text-2xl">📊</span>
                            </div>
                            <p className="text-gray-600">Track insights and view detailed reports</p>
                        </div>
                    </Link>

                    {/* Settings Card */}
                    <Link href="/dashboard/settings" className="block">
                        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold text-purple-600">Settings</h2>
                                <span className="text-2xl">⚙️</span>
                            </div>
                            <p className="text-gray-600">Customize preferences and manage your account</p>
                        </div>
                    </Link>

                    {/* Users Card */}
                    <Link href="/dashboard/users" className="block">
                        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold text-pink-600">Users</h2>
                                <span className="text-2xl">👥</span>
                            </div>
                            <p className="text-gray-600">Manage user roles, details and access</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
