'use client'; // Add this if you're using Next.js 13+ with app directory

import React, { useState } from 'react';

const initialTasks = [
    {
        id: 1,
        title: 'Finish Dashboard UI',
        description: 'Complete the layout and design for the main dashboard screen.',
        status: 'pending',
    },
    {
        id: 2,
        title: 'Fix login bug',
        description: 'Resolve the issue where login fails on invalid input.',
        status: 'inprogress',
    },
    {
        id: 3,
        title: 'Implement task filtering',
        description: 'Add filtering options for tasks based on status or priority.',
        status: 'completed',
    },
];

const getStatusStyles = (status) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'inprogress':
            return 'bg-blue-100 text-blue-800';
        case 'completed':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

function Tasks() {
    const [tasks, setTasks] = useState(initialTasks);

    const markAsComplete = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, status: 'completed' } : task
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Tasks</h1>

                <div className="space-y-4">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-blue-600">{task.title}</h2>
                                    <p className="text-gray-600 mt-1">{task.description}</p>
                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(task.status)}`}
                                >
                  {task.status}
                </span>
                            </div>

                            <div className="mt-4 flex gap-3 flex-wrap">
                                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition text-sm">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition text-sm">
                                    Delete
                                </button>

                                {task.status !== 'completed' && (
                                    <button
                                        onClick={() => markAsComplete(task.id)}
                                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition text-sm"
                                    >
                                        Mark as Complete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
