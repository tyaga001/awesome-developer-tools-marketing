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
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="py-6">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            DevToolsMarketing
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            {categories.slice(0, 3).map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                        <Button variant="outline">Contribute</Button>
                    </nav>
                </header>

                <main className="py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                                Awesome Developer Tools Marketing
                            </h1>
                            <p className="mt-4 text-xl text-gray-600 sm:mt-6 max-w-xl">
                                A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers.
                            </p>

                            <form className="mt-8 sm:mt-10 flex max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow mr-2"
                                />
                                <Button type="submit">Subscribe</Button>
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

                        <div className="space-y-6">
                            {categories.slice(0, 2).map((category) => (
                                <Card key={category.slug} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4">{category.description}</p>
                                        <Button variant="outline" asChild>
                                            <Link href={`/category/${category.slug}`}>Explore</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </main>

                <section className="py-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">More Categories</h2>
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

            <footer className="bg-gray-100 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <p className="text-center text-gray-600">&copy; {new Date().getFullYear()} Awesome Developer Tools Marketing. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}