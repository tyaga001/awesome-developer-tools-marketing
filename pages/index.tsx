import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Zap, Rocket, Users, Search, Mail, Code, BarChart2, Podcast, Menu, X  } from 'lucide-react';

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing', description: 'Strategies and resources for effective content marketing in the developer space.', icon: <Code className="w-6 h-6" /> },
    { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Platforms and tools for reaching developers through social media.', icon: <Users className="w-6 h-6" /> },
    { title: 'Email Marketing', slug: 'email-marketing', description: 'Best practices for email campaigns targeting developers.', icon: <Mail className="w-6 h-6" /> },
    { title: 'SEO for Developers', slug: 'seo-for-developers', description: 'Techniques to improve search visibility for developer tools.', icon: <Search className="w-6 h-6" /> },
    { title: 'Community Building', slug: 'community-building', description: 'Strategies for creating and nurturing developer communities.', icon: <Users className="w-6 h-6" /> },
    { title: 'Analytics and Metrics', slug: 'analytics-and-metrics', description: 'Tools and practices for measuring developer engagement and product success.', icon: <BarChart2 className="w-6 h-6" /> },
    { title: 'Product Hunt Launch Strategies', slug: 'product-hunt-launch-strategies', description: 'Tips for successful Product Hunt launches of developer tools.', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Developer Relations (DevRel)', slug: 'developer-relations', description: 'Best practices in developer relations and advocacy.', icon: <Users className="w-6 h-6" /> },
    { title: 'Technical Writing', slug: 'technical-writing', description: 'Resources for creating effective technical documentation and content.', icon: <Code className="w-6 h-6" /> },
    { title: 'API Documentation', slug: 'api-documentation', description: 'Tools and best practices for creating clear and useful API docs.', icon: <Code className="w-6 h-6" /> },
    { title: 'Open Source Marketing', slug: 'open-source-marketing', description: 'Strategies for marketing open source projects and tools.', icon: <Code className="w-6 h-6" /> },
    { title: 'Podcast Marketing', slug: 'podcast-marketing', description: 'Tips for creating and promoting developer-focused podcasts.', icon: <Podcast className="w-6 h-6" /> },
];

export default function Home() {

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleContribute = () => {
        router.push('https://github.com/tyaga001/awesome-developer-tools-marketing');
    };

    const handleCategoryClick = (slug: string) => {
        router.push(`/category/${slug}`);
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="py-4 sm:py-6">
                    <nav className="flex items-center justify-between">
                        <Link href="/"
                              className="text-2xl sm:text-3xl font-bold tracking-wide text-white flex items-center">
                            <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-2"/>
                            DevToolsMarketing
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {categories.slice(0, 3).map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="text-base font-medium text-white hover:text-yellow-300 transition-colors flex items-center"
                                >
                                    {category.icon}
                                    <span className="ml-2">{category.title}</span>
                                </Link>
                            ))}
                            <button
                                onClick={handleContribute}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                Contribute
                            </button>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 bg-white/10 rounded-lg p-4">
                            {categories.map((category) => (
                                <div
                                    key={category.slug}
                                    className="py-2 cursor-pointer hover:bg-white/5 rounded-md transition-colors"
                                    onClick={() => handleCategoryClick(category.slug)}
                                >
                                    <span className="flex items-center text-white hover:text-yellow-300">
                                        {category.icon}
                                        <span className="ml-2">{category.title}</span>
                                    </span>
                                </div>
                            ))}
                            <button
                                onClick={handleContribute}
                                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                Contribute
                            </button>
                        </div>
                    )}
                </header>

                <main className="py-8 sm:py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl leading-tight">
                                Awesome Developer Marketing
                            </h1>
                            <p className="mt-4 text-lg sm:text-xl text-white/90 sm:mt-6 max-w-xl">
                                A curated list of awesome resources for marketing developer tools. Find strategies,
                                tools, and insights to effectively reach and engage with developers.
                            </p>

                            <div className="flex items-center mt-8 sm:mt-10 space-x-8">
                                <div className="animate-pulse">
                                    <p className="text-3xl sm:text-4xl font-medium text-white">100+</p>
                                    <p className="mt-1 text-xs sm:text-sm text-white/70">Resources Curated</p>
                                </div>
                                <div className="animate-pulse">
                                    <p className="text-3xl sm:text-4xl font-medium text-white">500+</p>
                                    <p className="mt-1 text-xs sm:text-sm text-white/70">Daily Visitors</p>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-6">
                            <Tabs defaultValue="featured" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 bg-white/10">
                                    <TabsTrigger value="featured" className="text-white">Featured</TabsTrigger>
                                    <TabsTrigger value="trending" className="text-white">Trending</TabsTrigger>
                                </TabsList>
                                <TabsContent value="featured">
                                    <ScrollArea
                                        className="h-[300px] sm:h-[400px] w-full rounded-md border border-white/20 p-4">
                                        {categories.slice(0, 6).map((category, index) => (
                                            <React.Fragment key={category.slug}>
                                                <div
                                                    className="flex items-center space-x-4 py-4 cursor-pointer hover:bg-white/5 rounded-md transition-colors"
                                                    onClick={() => handleCategoryClick(category.slug)}
                                                >
                                                    <div className="bg-white/10 p-3 rounded-full">{category.icon}</div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                                        <p className="text-sm text-white/70">{category.description}</p>
                                                    </div>
                                                    <ChevronRight className="ml-auto flex-shrink-0 w-5 h-5"/>
                                                </div>
                                                {index < 5 && <Separator className="bg-white/20"/>}
                                            </React.Fragment>
                                        ))}
                                    </ScrollArea>
                                </TabsContent>
                                <TabsContent value="trending">
                                    <ScrollArea
                                        className="h-[300px] sm:h-[400px] w-full rounded-md border border-white/20 p-4">
                                        {categories.slice(6).map((category, index) => (
                                            <React.Fragment key={category.slug}>
                                                <div
                                                    className="flex items-center space-x-4 py-4 cursor-pointer hover:bg-white/5 rounded-md transition-colors"
                                                    onClick={() => handleCategoryClick(category.slug)}
                                                >
                                                    <div className="bg-white/10 p-3 rounded-full">{category.icon}</div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                                        <p className="text-sm text-white/70">{category.description}</p>
                                                    </div>
                                                    <ChevronRight className="ml-auto flex-shrink-0 w-5 h-5"/>
                                                </div>
                                                {index < 5 && <Separator className="bg-white/20"/>}
                                            </React.Fragment>
                                        ))}
                                    </ScrollArea>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </main>

                <section className="py-8 sm:py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Explore All Categories</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {categories.map((category) => (
                            <Card key={category.slug}
                                  className="bg-white/10 shadow hover:shadow-lg transition-shadow border-white/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                                        {category.icon}
                                        <span>{category.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/80 mb-4 text-sm sm:text-base">{category.description}</p>
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                        onClick={() => handleCategoryClick(category.slug)}
                                    >
                                        Explore <ChevronRight className="ml-2 w-4 h-4"/>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            <footer className="bg-gray-900 mt-8 sm:mt-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Me</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-yellow-300">My Mission</Link></li>
                                <li><Link href="#" className="hover:text-yellow-300">Why</Link></li>
                                <li><Link href="#" className="hover:text-yellow-300">Education</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link href="https://www.devtoolsacademy.com/"
                                          className="hover:text-yellow-300">Blog</Link></li>
                                <li><Link href="https://theankurtyagi.com/"
                                          className="hover:text-yellow-300">Tutorials</Link></li>
                                <li><Link href="https://bytesizedbets.com/"
                                          className="hover:text-yellow-300">Newsletter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Community</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-yellow-300">Forum</Link></li>
                                <li><Link href="#" className="hover:text-yellow-300">Slack Channel</Link></li>
                                <li><Link href="#" className="hover:text-yellow-300">Events</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect</h3>
                            <ul className="space-y-2">
                                <li><Link href="https://x.com/TheAnkurTyagi"
                                          className="hover:text-yellow-300">Twitter</Link></li>
                                <li><Link href="https://www.linkedin.com/in/theankurtyagi/"
                                          className="hover:text-yellow-300">LinkedIn</Link></li>
                                <li><Link href="https://github.com/tyaga001/awesome-developer-tools-marketing"
                                          className="hover:text-yellow-300">GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Awesome Developer Tools
                            Marketing. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}