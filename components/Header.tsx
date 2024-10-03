import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto px-4 py-6">
                <Link href="/">
                    <a className="text-2xl font-bold">Awesome Developer Tools Marketing</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;