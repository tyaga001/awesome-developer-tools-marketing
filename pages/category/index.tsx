import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resourcesData } from '@/lib/resourcesData';

export default function CategoriesListPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-center">Explore All Categories</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {resourcesData.map((category) => (
                        <Card key={category.slug} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                                <Button variant="outline" asChild>
                                    <Link href={`/category/${category.slug}`}>
                                        Explore
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}