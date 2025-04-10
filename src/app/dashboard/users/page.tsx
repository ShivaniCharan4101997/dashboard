'use client';

import React from 'react';
import Link from 'next/link';

function Users() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Users</h1>
                <p className="text-gray-600 mb-6">
                    Manage all user-related actions from here, including details and list views.
                </p>

                {/* User Related Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link href="/dashboard/users/users-details">
                        <div className="bg-blue-100 hover:bg-blue-200 transition p-6 rounded-xl shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-blue-800 mb-1">User Details</h2>
                            <p className="text-gray-700 text-sm">View individual user profiles and detailed data</p>
                        </div>
                    </Link>

                    <Link href="/dashboard/users/users-list">
                        <div className="bg-green-100 hover:bg-green-200 transition p-6 rounded-xl shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-green-800 mb-1">User List</h2>
                            <p className="text-gray-700 text-sm">Browse all registered users in a list format</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Users;
