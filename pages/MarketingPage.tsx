import React from 'react'
import { NextPage } from 'next'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface MarketingPageProps {
    title: string
    description: string
}

const MarketingPage: NextPage<MarketingPageProps> = ({ title, description }) => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default MarketingPage