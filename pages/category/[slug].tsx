import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resourcesData } from '@/lib/resourcesData';

export default function CategoryPage(): React.JSX.Element {
    const router = useRouter();
    const { slug } = router.query;
    const categoryData = resourcesData.find(category => category.slug === slug);

    if (!categoryData) {
        return <div>Category not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-2 text-center">{categoryData.title}</h1>
                <p className="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">{categoryData.description}</p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categoryData.resources.map((resource, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                                <Button variant="outline" asChild>
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