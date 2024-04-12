"use client"
// components/Button.js
import React from 'react';
import { useRouter } from 'next/navigation';

const Button = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/Deshbord");
    };

    return (
        <div>
            <button onClick={handleButtonClick} className="mt-2 bg-blue-500 hover:underline">
                Dashboard
            </button>
        </div>
    );
};

export default Button;
