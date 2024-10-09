import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Endpoint {
    name: string
    description: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    path: string
}

const endpoints: Endpoint[] = [
    {
        name: 'Get User',
        description: 'Retrieves user information',
        method: 'GET',
        path: '/api/users/:id',
    },
    {
        name: 'Create User',
        description: 'Creates a new user',
        method: 'POST',
        path: '/api/users',
    },
    // Add more endpoints as needed
]

const ApiDocumentation: NextPage = () => {
    const router = useRouter()

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">API Documentation</h1>
            <Tabs defaultValue="endpoints">
                <TabsList>
                    <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                    <TabsTrigger value="authentication">Authentication</TabsTrigger>
                </TabsList>
                <TabsContent value="endpoints">
                    <div className="grid gap-4">
                        {endpoints.map((endpoint) => (
                            <Card key={endpoint.name}>
                                <CardHeader>
                                    <CardTitle>{endpoint.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500 mb-2">{endpoint.description}</p>
                                    <p className="font-mono">
                    <span className={`font-bold ${endpoint.method === 'GET' ? 'text-green-600' : 'text-blue-600'}`}>
                      {endpoint.method}
                    </span>{' '}
                                        {endpoint.path}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="authentication">
                    <Card>
                        <CardHeader>
                            <CardTitle>Authentication</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Describe your authentication process here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ApiDocumentation