'use client';

import React from 'react';

const metrics = [
    {
        title: 'Total Tasks',
        value: 128,
        change: 12,
        isPositive: true,
    },
    {
        title: 'Completed Tasks',
        value: 86,
        change: 8,
        isPositive: true,
    },
    {
        title: 'Pending Tasks',
        value: 30,
        change: -5,
        isPositive: false,
    },
    {
        title: 'In Progress',
        value: 12,
        change: 2,
        isPositive: true,
    },
];

const recentActivities = [
    {
        title: 'User Registration',
        description: 'New user signup on 2026-02-12',
        stat: '+10 users',
    },
    {
        title: 'Sales Increase',
        description: 'Sales grew by 12%',
        stat: '+$3,000',
    },
    {
        title: 'Website Traffic Surge',
        description: 'Traffic increased by 8%',
        stat: '+1.2K visits',
    },
];

function Analytics() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Analytics Overview</h1>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {metrics.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                            <h2 className="text-gray-500 text-sm font-medium">{item.title}</h2>
                            <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                            <p
                                className={`text-sm mt-2 flex items-center gap-1 font-medium ${
                                    item.isPositive ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {item.isPositive ? '▲' : '▼'} {Math.abs(item.change)}%
                                <span className="text-gray-400 text-xs ml-1">(vs last week)</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Recent Activities */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Activities</h2>

                    <ul className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-sm transition"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                                    <p className="text-sm text-gray-600">{activity.description}</p>
                                </div>
                                <p className="text-sm font-medium text-indigo-600">{activity.stat}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
