import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Resource {
    title: string;
    url: string;
    description: string;
}

interface ResourcesData {
    [key: string]: Resource[];
}

const resourcesData: ResourcesData = {
    'content-marketing': [
        { title: "Developer Marketing Does Not Exist", url: "https://everydeveloper.com/developer-marketing/", description: "An insightful article by Adam DuVander on the nature of developer marketing." },
        { title: "The Epic Guide to Developer Marketing", url: "https://www.devmarketingguide.com/", description: "A comprehensive guide by Matt Broberg covering various aspects of developer marketing." },
    ],
    'social-media-marketing': [
        { title: "How to market to developers on Twitter", url: "https://www.markepear.com/blog/developer-marketing-twitter", description: "Insights on using Twitter for developer tools marketing by Kuba." },
    ],
};

export default function CategoryPage() {
    const router = useRouter();
    const { slug } = router.query;
    const resources = slug && typeof slug === 'string' ? resourcesData[slug] || [] : [];

    const categoryTitle = slug && typeof slug === 'string'
        ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        : '';

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-center">{categoryTitle}</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {resources.map((resource, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                                <Button variant="outline">
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                        View Resource
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}