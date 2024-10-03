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
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Awesome Developer Tools Marketing</h1>
                    <p className="text-xl mb-8">A curated list of awesome resources for marketing developer tools</p>
                    <Button size="lg">
                        <a href="#categories">Explore Categories</a>
                    </Button>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Marketing Categories</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <Link href={`/category/${category.slug}`} key={category.slug}>
                                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                                    <CardHeader>
                                        <CardTitle>{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}