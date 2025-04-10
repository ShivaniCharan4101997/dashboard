import React from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h1>
            <p className="text-gray-600 mb-6">This is your main control panel</p>
            <Link
                href="/dashboard"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go to Dashboard
            </Link>
        </div>
    );
}

export default Home;
