'use client';

import React, { useState } from 'react';

function Notifications() {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
    });

    const toggleNotification = (type) => {
        setNotifications((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Notification Settings</h1>

                {/* Email Notifications */}
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Email Notifications</h2>
                        <p className="text-gray-500">Receive updates and alerts via email.</p>
                    </div>
                    <button
                        onClick={() => toggleNotification('email')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            notifications.email
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {notifications.email ? 'Enabled' : 'Disabled'}
                    </button>
                </div>

                {/* SMS Notifications */}
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">SMS Notifications</h2>
                        <p className="text-gray-500">Get real-time updates via SMS.</p>
                    </div>
                    <button
                        onClick={() => toggleNotification('sms')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            notifications.sms
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {notifications.sms ? 'Enabled' : 'Disabled'}
                    </button>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Push Notifications</h2>
                        <p className="text-gray-500">Allow push messages on your device.</p>
                    </div>
                    <button
                        onClick={() => toggleNotification('push')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            notifications.push
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {notifications.push ? 'Enabled' : 'Disabled'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
