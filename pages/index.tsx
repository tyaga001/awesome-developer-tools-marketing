import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing' },
    { title: 'Social Media Marketing', slug: 'social-media-marketing' },
    { title: 'Email Marketing', slug: 'email-marketing' },
    { title: 'SEO for Developers', slug: 'seo-for-developers' },
    { title: 'Community Building', slug: 'community-building' },
    { title: 'Analytics and Metrics', slug: 'analytics-and-metrics' },
    { title: 'Product Hunt Launch Strategies', slug: 'product-hunt-launch-strategies' },
    { title: 'Developer Relations (DevRel)', slug: 'developer-relations' },
    { title: 'Technical Writing', slug: 'technical-writing' },
    { title: 'Public Speaking and Conferences', slug: 'public-speaking-and-conferences' },
    { title: 'Open Source Marketing', slug: 'open-source-marketing' },
    { title: 'Developer Surveys and Feedback', slug: 'developer-surveys-and-feedback' },
    { title: 'API Documentation', slug: 'api-documentation' },
    { title: 'Developer Advocacy', slug: 'developer-advocacy' },
    { title: 'Influencer Marketing in Tech', slug: 'influencer-marketing-in-tech' },
    { title: 'Podcast Marketing', slug: 'podcast-marketing' },
];

export default function Home() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Awesome Developer Tools Marketing</h1>
                <p className="text-xl mb-8">A curated list of awesome resources for marketing developer tools</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <Link href={`/${category.slug}`} key={category.slug}>
                            <CategoryCard title={category.title} />
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}