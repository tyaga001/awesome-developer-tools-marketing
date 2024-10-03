import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing', description: 'Strategies and resources for effective content marketing in the developer space.' },
    { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Platforms and tools for reaching developers through social media.' },
    { title: 'Email Marketing', slug: 'email-marketing', description: 'Best practices for email campaigns targeting developers.' },
    { title: 'SEO for Developers', slug: 'seo-for-developers', description: 'Techniques to improve search visibility for developer tools.' },
    { title: 'Community Building', slug: 'community-building', description: 'Strategies for creating and nurturing developer communities.' },
    { title: 'Analytics and Metrics', slug: 'analytics-and-metrics', description: 'Tools and practices for measuring developer engagement and product success.' },
    { title: 'Product Hunt Launch Strategies', slug: 'product-hunt-launch-strategies', description: 'Tips for successful Product Hunt launches of developer tools.' },
    { title: 'Developer Relations (DevRel)', slug: 'developer-relations', description: 'Best practices in developer relations and advocacy.' },
    { title: 'Technical Writing', slug: 'technical-writing', description: 'Resources for creating effective technical documentation and content.' },
    { title: 'API Documentation', slug: 'api-documentation', description: 'Tools and best practices for creating clear and useful API docs.' },
    { title: 'Open Source Marketing', slug: 'open-source-marketing', description: 'Strategies for marketing open source projects and tools.' },
    { title: 'Podcast Marketing', slug: 'podcast-marketing', description: 'Tips for creating and promoting developer-focused podcasts.' },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900">
            <header className="bg-gray-900 border-b border-gray-800">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        <div className="flex items-center flex-shrink-0">
                            <Link href="/" className="inline-flex">
                                <span className="sr-only">Awesome Developer Tools Marketing</span>
                                <img className="w-auto h-8" src="/logo.svg" alt="Logo" />
                            </Link>
                        </div>

                        <nav className="hidden lg:flex lg:space-x-8">
                            {categories.slice(0, 4).map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center">
                            <Button variant="outline" className="hidden lg:inline-flex">
                                Contribute
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                                Awesome Developer Tools Marketing
                            </h1>
                            <p className="mt-8 text-base font-normal leading-7 text-gray-400">
                                A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers.
                            </p>

                            <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
                                <Button size="lg">
                                    Explore Resources
                                </Button>
                                <Button variant="outline" size="lg">
                                    Contribute
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl -mt-12 relative z-10">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <Link href={`/category/${category.slug}`} key={category.slug}>
                                <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gray-800 text-white">
                                    <CardHeader>
                                        <CardTitle>{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-300">{category.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}