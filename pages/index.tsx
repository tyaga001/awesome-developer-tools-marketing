import React from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing', description: 'Strategies and resources for effective content marketing in the developer space.' },
    { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Platforms and tools for reaching developers through social media.' },
    { title: 'Email Marketing', slug: 'email-marketing', description: 'Best practices for email campaigns targeting developers.' },
    // Add more categories as needed
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
            <header className="py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            DevToolsMarketing
                        </Link>

                        <nav className="hidden md:flex space-x-8">
                            {categories.slice(0, 3).map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </nav>

                        <Button variant="outline">Contribute</Button>
                    </div>
                </div>
            </header>

            <main className="relative">
                <div className="absolute inset-0 bg-[url('/background-pattern.png')] bg-no-repeat bg-right-bottom opacity-10 pointer-events-none"></div>

                <section className="py-12 sm:py-16 lg:py-20 lg:pb-36">
                    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                                    Awesome Developer Tools Marketing
                                </h1>
                                <p className="mt-4 text-xl text-gray-600 sm:mt-6">
                                    A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers.
                                </p>

                                <form className="mt-8 sm:mt-10 flex">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow mr-2"
                                    />
                                    <Button type="submit" size="lg">Subscribe</Button>
                                </form>

                                <div className="flex items-center mt-10 space-x-8">
                                    <div>
                                        <p className="text-3xl font-medium text-gray-900">2943</p>
                                        <p className="mt-1 text-sm text-gray-600">Resources Curated</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-medium text-gray-900">500+</p>
                                        <p className="mt-1 text-sm text-gray-600">Daily Visitors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:ml-auto">
                                <img src="/hero-image.png" alt="Developer Tools" className="w-full max-w-md mx-auto" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Categories</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories.map((category) => (
                                <div key={category.slug} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                                    <p className="text-gray-600 mb-4">{category.description}</p>
                                    <Button variant="outline" asChild>
                                        <Link href={`/category/${category.slug}`}>Explore</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <p>&copy; {new Date().getFullYear()} Awesome Developer Tools Marketing. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}