'use client';

import React from 'react';

const user = {
    name: 'Shivani Sharma',
    username: 'shivani123',
    email: 'shivani@example.com',
    role: 'Frontend Developer',
    status: 'Active',
    bio: 'Passionate about creating beautiful and functional web apps using React and Tailwind CSS.',
    profilePic: 'https://i.pravatar.cc/150?img=47', // Dummy image
    activities: [
        'Logged in from Chrome browser',
        'Updated profile picture',
        'Completed task: Dashboard UI',
        'Changed password',
    ],
};

function Tasks() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
            <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
                {/* Profile Header */}
                <div className="flex items-center space-x-6 mb-6">
                    <img
                        src={user.profilePic}
                        alt={user.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">@{user.username}</p>
                        <span className={`text-sm font-medium mt-1 inline-block ${
                            user.status === 'Active'
                                ? 'text-green-600'
                                : 'text-red-600'
                        }`}>
                            ● {user.status}
                        </span>
                    </div>
                </div>

                {/* Bio and Info */}
                <div className="mb-6">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
                    <p className="text-gray-700 mb-2"><strong>Role:</strong> {user.role}</p>
                    <p className="text-gray-700"><strong>Bio:</strong> {user.bio}</p>
                </div>

                {/* Activities */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Activities</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {user.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
