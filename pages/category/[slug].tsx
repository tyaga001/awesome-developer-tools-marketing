import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resourcesData } from '@/lib/resourcesData';
import { Zap, ChevronLeft, ExternalLink } from 'lucide-react';

export default function CategoryPage(): React.JSX.Element {
    const router = useRouter();
    const { slug } = router.query;
    const categoryData = resourcesData.find(category => category.slug === slug);

    if (!categoryData) {
        return <div>Category not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="py-4 sm:py-6">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold tracking-wide text-white flex items-center">
                            <Zap className="w-6 h-6 mr-2"/>
                        </Link>
                        <Button
                            variant="ghost"
                            onClick={() => router.push('/')}
                            className="text-white hover:text-yellow-300 transition-colors text-sm"
                        >
                            <ChevronLeft className="mr-1 h-4 w-4" />
                            Back
                        </Button>
                    </nav>
                </header>

                <main className="py-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{categoryData.title}</h1>
                    <p className="text-lg text-center mb-8 text-white/80">{categoryData.description}</p>
                    <div className="space-y-6">
                        {categoryData.resources.map((resource, index) => (
                            <Card key={index} className="bg-white/10 shadow hover:shadow-lg transition-shadow border-white/20">
                                <CardHeader>
                                    <CardTitle className="text-white text-xl">{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/80 mb-4 text-sm">{resource.description}</p>
                                    <Button
                                        variant="secondary"
                                        className="w-full text-sm flex items-center justify-center"
                                        onClick={() => window.open(resource.url, '_blank')}
                                    >
                                        View Resource
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}