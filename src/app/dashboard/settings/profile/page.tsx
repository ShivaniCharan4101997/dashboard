'use client';

import React, { useState } from 'react';

function ProfileSettings() {
    const [formData, setFormData] = useState({
        fullName: 'Jane Doe',
        username: 'janedoe',
        email: 'jane@example.com',
    });

    const [profilePic, setProfilePic] = useState('https://i.pravatar.cc/150?img=47');

    const handleChange = (e:	React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e:	React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Profile updated!');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Profile Settings</h1>

                {/* Profile Picture */}
                <div className="flex flex-col items-center mb-10">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-sm"
                    />
                    <label className="mt-3 text-blue-600 hover:underline cursor-pointer text-sm font-medium">
                        Change Profile Picture
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    </label>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileSettings;
