import React from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing', description: 'Strategies and resources for effective content marketing in the developer space.' },
    { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Platforms and tools for reaching developers through social media.' },
    { title: 'Email Marketing', slug: 'email-marketing', description: 'Best practices for email campaigns targeting developers.' },
    { title: 'SEO for Developers', slug: 'seo-for-developers', description: 'Optimize your content for developer-focused search queries.' },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="py-6">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="text-3xl font-bold tracking-wide text-white">
                            DevToolsMarketing
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            {categories.slice(0, 3).map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="text-base font-medium text-white hover:text-yellow-300 transition-colors"
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                        <Button variant="outline" className="border-gradient text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600">
                            Contribute
                        </Button>
                    </nav>
                </header>

                <main className="py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                        <div>
                            <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl leading-tight">
                                Awesome Developer Tools Marketing
                            </h1>
                            <p className="mt-4 text-xl text-white/90 sm:mt-6 max-w-xl">
                                A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers.
                            </p>

                            <form className="mt-8 sm:mt-10 flex max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow mr-2 bg-gray-200"
                                />
                                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">Subscribe</Button>
                            </form>

                            <div className="flex items-center mt-10 space-x-8">
                                <div className="animate-pulse">
                                    <p className="text-4xl font-medium text-white">2943</p>
                                    <p className="mt-1 text-sm text-white/70">Resources Curated</p>
                                </div>
                                <div className="animate-pulse">
                                    <p className="text-4xl font-medium text-white">500+</p>
                                    <p className="mt-1 text-sm text-white/70">Daily Visitors</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {categories.slice(0, 2).map((category) => (
                                <div key={category.slug}
                                     className="bg-white/10 backdrop-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                    <h3 className="text-white font-semibold mb-2">{category.title}</h3>
                                    <p className="text-white/80 mb-4">{category.description}</p>
                                    <button
                                        className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                                        Explore
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                <section className="py-16">
                    <h2 className="text-3xl font-bold text-white mb-8">More Categories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.slice(2).map((category) => (
                            <Card key={category.slug} className="bg-white shadow hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">{category.description}</p>
                                    <Button variant="outline" asChild>
                                        <Link href={`/category/${category.slug}`}>Learn more</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            <footer className="bg-gray-900 mt-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Awesome Developer Tools Marketing. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
