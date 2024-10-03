import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing', description: 'Strategies and resources for effective content marketing in the developer space.' },
    { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Platforms and tools for reaching developers through social media.' },
    { title: 'Email Marketing', slug: 'email-marketing', description: 'Best practices for email campaigns targeting developers.' },
    // ... other categories
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">DevToolsMarketing</Link>
                <nav className="hidden md:flex space-x-6">
                    {categories.slice(0, 4).map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} className="hover:text-primary-300 transition-colors">
                            {category.title}
                        </Link>
                    ))}
                </nav>
                <Button variant="outline">Contribute</Button>
            </header>

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Awesome Developer Tools Marketing</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers.
                    </p>
                    <div className="flex justify-center items-center space-x-4 max-w-md mx-auto">
                        <Input type="email" placeholder="Enter your email" className="flex-grow" />
                        <Button size="lg">Subscribe</Button>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    {categories.slice(0, 2).map((category) => (
                        <Card key={category.slug} className="bg-gray-800 border-gray-700 hover:border-primary-500 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-2xl">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">{category.description}</p>
                                <Button variant="outline" asChild>
                                    <Link href={`/category/${category.slug}`}>Explore</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">More Categories</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {categories.slice(2).map((category) => (
                            <Card key={category.slug} className="bg-gray-800 border-gray-700 hover:border-primary-500 transition-colors">
                                <CardHeader>
                                    <CardTitle>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{category.description}</p>
                                    <Button variant="link" asChild>
                                        <Link href={`/category/${category.slug}`}>Learn more</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-800 text-center">
                <p>&copy; {new Date().getFullYear()} Awesome Developer Tools Marketing. All rights reserved.</p>
            </footer>
        </div>
    );
}