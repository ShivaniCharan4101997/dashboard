'use client';

import React from 'react';

const usersList = [
    {
        id: 1,
        name: 'Shivani Sharma',
        email: 'shivani@example.com',
        role: 'Frontend Developer',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Raj Mehta',
        email: 'raj@example.com',
        role: 'Backend Developer',
        status: 'Inactive',
    },
    {
        id: 3,
        name: 'Anjali Verma',
        email: 'anjali@example.com',
        role: 'UI/UX Designer',
        status: 'Active',
    },
    {
        id: 4,
        name: 'Vikram Singh',
        email: 'vikram@example.com',
        role: 'Project Manager',
        status: 'Pending',
    },
];

function UsersList() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">Users List</h1>

                <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
                    <table className="min-w-full table-auto border-collapse overflow-hidden">
                        <thead className="bg-purple-200 text-purple-900 text-left">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">Name</th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">Email</th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">Role</th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">Status</th>
                            <th className="px-6 py-4 text-sm font-semibold uppercase">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100">
                        {usersList.map((user) => (
                            <tr
                                key={user.id}
                                className="hover:bg-purple-50 transition duration-300 ease-in-out"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                                <td className="px-6 py-4 text-sm">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === 'Active'
                                ? 'bg-green-100 text-green-700'
                                : user.status === 'Inactive'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-yellow-100 text-yellow-700'
                        }`}
                    >
                      {user.status}
                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button className="text-xs px-3 py-1 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 transition">
                                        View
                                    </button>
                                    <button className="text-xs px-3 py-1 rounded-lg bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition">
                                        Edit
                                    </button>
                                    <button className="text-xs px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UsersList;
