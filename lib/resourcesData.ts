export interface Resource {
    title: string;
    url: string;
    description: string;
}

export interface CategoryData {
    title: string;
    slug: string;
    description: string;
    resources: Resource[];
}

export const resourcesData: CategoryData[] = [
    {
        title: 'Content Marketing',
        slug: 'content-marketing',
        description: 'Strategies and resources for effective content marketing in the developer space.',
        resources: [
            {
                title: "Developer Marketing Does Not Exist",
                url: "https://everydeveloper.com/developer-marketing/",
                description: "An insightful article by Adam DuVander on the nature of developer marketing."
            },
            {
                title: "The Epic Guide to Developer Marketing",
                url: "https://www.devmarketingguide.com/",
                description: "A comprehensive guide by Matt Broberg covering various aspects of developer marketing."
            },
            {
                title: "Developer Marketing Guide",
                url: "https://www.markepear.com/blog/developer-marketing-guide",
                description: "A comprehensive guide on developer marketing strategies from the perspective of a dev tool startup CMO."
            },
            {
                title: "On Developer Marketing",
                url: "https://leerob.com/n/developer-marketing",
                description: "A comprehensive guide on developer marketing strategies from Lee Robinson."
            },
            {
                title: "Developer Marketing Does Not Exist (Book)",
                url: "https://www.amazon.com/Developer-Marketing-Does-Not-Exist-ebook/dp/B091NK954H/",
                description: "A book exploring the concept that traditional marketing doesn't apply to developers."
            },
            {
                title: "Marketing to Developers: B2D",
                url: "https://opensenselabs.com/blog/marketing-developers-b2d",
                description: "Insights on business-to-developer (B2D) marketing strategies."
            },
            {
                title: "Marketing to Developers",
                url: "https://helenmin.com/blog/marketing-to-developers",
                description: "A blog post by Helen Min on effective strategies for marketing to developers."
            },
            {
                title: "B2D Go-To-Market",
                url: "https://tomtunguz.com/b2d-go-to-market/",
                description: "Insights on go-to-market strategies for developer-focused products."
            }
        ]
    },
    
    {
        title: 'Developer Marketing Insights',
        slug: 'developer-marketing-insights',
        description: 'Comprehensive insights and strategies for marketing to developers from industry experts.',
        resources: [
            {
                title: "Insights from 100 DevTools Founders",
                url: "https://blog.scalingdevtools.com/i-interviewed-100-devtools-founders/",
                description: "Valuable insights gathered from interviews with 100 DevTools founders."
            },
            {
                title: "Designing for Developers: Key Takeaways",
                url: "https://janairis.medium.com/designing-for-developers-key-takeaways-from-a-founder-dinner-7e61d977886f",
                description: "Key takeaways on designing for developers from a founder dinner discussion."
            },
            {
                title: "Selling the Value of Dev Tools in 2023",
                url: "https://medium.com/boldstart-ventures/how-to-sell-the-value-of-dev-tools-in-2023-cd5d3826a358",
                description: "Strategies for effectively selling and marketing dev tools in the current landscape."
            },
            {
                title: "The Ultimate Guide to Developer Marketing",
                url: "https://creatoreconomy.so/p/lee-the-ultimate-guide-to-developer-marketing",
                description: "A comprehensive guide covering various aspects of developer marketing."
            },
            {
                title: "Developer Marketing Strategies",
                url: "https://www.datadab.com/blog/developer-marketing/",
                description: "Insights and strategies for effective developer marketing by DataDab."
            },
            {
                title: "Dev Marketing for Startups",
                url: "https://posthog.com/founders/dev-marketing-for-startups",
                description: "Guide on developer marketing strategies specifically tailored for startups by PostHog."
            },
            {
                title: "Clerk's YouTube Partnership Strategy",
                url: "https://playbooks.hypergrowthpartners.com/p/how-clerk-partners-with-youtubes",
                description: "Case study on how Clerk partners with YouTube creators for developer marketing."
            },
            {
                title: "The Importance of Using Experts in Developer Marketing",
                url: "https://techcrunch.com/2021/07/29/draft-dev-ceo-karl-hughes-on-the-importance-of-using-experts-in-developer-marketing/",
                description: "TechCrunch article on the value of expert input in developer marketing."
            },
            {
                title: "Learning How to Market to Developers",
                url: "https://web.archive.org/web/20210119213330/https://devada.com/learning-how-market-to-developers/",
                description: "Archived guide on effective strategies for marketing to developers."
            }
        ]
    },
    
    {
        title: 'Social Media Marketing',
        slug: 'social-media-marketing',
        description: 'Platforms and tools for reaching developers through social media.',
        resources: [
            {
                title: "How to market to developers on Twitter",
                url: "https://www.markepear.com/blog/developer-marketing-twitter",
                description: "Insights on using Twitter for developer tools marketing by Kuba."
            },
            {
                title: "Twitter video ad from Kinde.",
                url: "https://www.markepear.com/example/kinde-twitter-video-ad",
                description: "\"Timer\" Twitter video ad from Kinde."
            }
        ]
    },
    {
        title: 'Email Marketing',
        slug: 'email-marketing',
        description: 'Best practices for email campaigns targeting developers.',
        resources: [
            {
                title: "Email Marketing for Developers",
                url: "https://ronakganatra.com/posts/email-marketing-to-developers/",
                description: "A guide on effective email marketing strategies for reaching developers by Ronak."
            },
            {
                title: "Developer Newsletters",
                url: "https://github.com/jackbridger/developer-newsletters",
                description: "A list of 140 developer newsletters + how to sponsor them by Jack."
            }
        ]
    },
    {
        title: 'SEO for Developers',
        slug: 'seo-for-developers',
        description: 'Techniques to improve search visibility for developer tools.',
        resources: [
            {
                title: "SEO for Developers",
                url: "https://medium.com/welldone-software/seo-for-developers-a-quick-overview-5b5b7ce34679",
                description: "All you need to know about your role as a developer to improve your website’s position in Google search results."
            },
            {
                title: "Technical SEO for Developers",
                url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
                description: "Google's starter guide on technical SEO for developers."
            }
        ]
    },
    {
        title: 'Community Building',
        slug: 'community-building',
        description: 'Strategies for creating and nurturing developer communities.',
        resources: [
            {
                title: "The Business Value of Developer Relations",
                url: "https://www.amazon.com/Business-Value-Developer-Relations-Communities/dp/1484237471",
                description: "A book by Mary Thengvall on building and maintaining developer communities."
            },
            {
                title: "Building High Impact Developer Communities",
                url: "https://nader.substack.com/p/building-high-impact-developer-communities",
                description: "A comprehensive guide on building developer communities by Nader."
            }
        ]
    },
    {
        title: 'Analytics and Metrics',
        slug: 'analytics-and-metrics',
        description: 'Tools and practices for measuring developer engagement and product success.',
        resources: [
            {
                title: "Developer Marketing Metrics",
                url: "https://www.markepear.com/blog/developer-marketing-metrics",
                description: "An article on key performance indicators for developer marketing by Jakub."
            },
            {
                title: "Measuring Developer Relations",
                url: "https://www.swyx.io/measuring-devrel",
                description: "A framework for measuring developer relations success by Swyx."
            }
        ]
    },
    {
        title: 'Product Hunt Launch Strategies',
        slug: 'product-hunt-launch-strategies',
        description: 'Tips for successful Product Hunt launches of developer tools.',
        resources: [
            {
                title: "How to Launch on Product Hunt",
                url: "https://www.producthunt.com/launch",
                description: "Official guide from Product Hunt on how to launch successfully."
            },
            {
                title: "Lago's Product Hunt Launch Handbook",
                url: "https://github.com/getlago/lago/wiki/Product-Hunt-launch-:-our-handbook",
                description: "Lago's detailed handbook sharing their experiences and best practices for launching on Product Hunt."
            },
            {
                title: "How We Missed #1 on Product Hunt but Still Won Big",
                url: "https://dev.to/daytona/how-we-missed-1-on-product-hunt-but-still-won-big-1gig",
                description: "Daytona's story of missing the top spot on Product Hunt but gaining valuable insights and success."
            },
            {
                title: "How we got our Dev Tool ‘Product of the Day’ in Product Hunt (And Survived)",
                url: "https://www.permit.io/blog/producthunt-howto",
                description: "A comprehensive guide by Permit.io on the best practices, tips, and strategies to successfully launch your product on Product Hunt."
            },
            {
                title: "Launching developer tools on ProductHunt",
                url: "https://ronakganatra.com/posts/successfully-launch-dev-tools-on-producthunt",
                description: "Insights and strategies from Ronak on how to successfully launch developer tools on Product Hunt."
            }
        ]
    },
    {
        title: 'Developer Relations (DevRel)',
        slug: 'developer-relations',
        description: 'Best practices in developer relations and advocacy.',
        resources: [
            {
                title: "The DevRel Book",
                url: "https://devrelbook.com/",
                description: "A comprehensive guide on developer relations by Caroline Lewko and Mary Thengvall."
            },
            {
                title: "DevRel Resources",
                url: "https://github.com/devrelcollective/awesome-devrel",
                description: "A curated list of developer relations resources on GitHub."
            }
        ]
    },
    {
        title: 'Technical Writing',
        slug: 'technical-writing',
        description: 'Resources for creating effective technical documentation and content.',
        resources: [
            {
                title: "Google Technical Writing Course",
                url: "https://developers.google.com/tech-writing",
                description: "A free course on technical writing best practices by Google."
            },
            {
                title: "Technical Writing for Developers",
                url: "https://www.freecodecamp.org/news/technical-writing-for-developers/",
                description: "A guide to technical writing for developers by freeCodeCamp."
            }
        ]
    },
    {
        title: 'API Documentation',
        slug: 'api-documentation',
        description: 'Tools and best practices for creating clear and useful API docs.',
        resources: [
            {
                title: "API Documentation Best Practices",
                url: "https://swagger.io/blog/api-documentation/best-practices-in-api-documentation/",
                description: "Best practices for API documentation by Swagger."
            },
            {
                title: "API Documentation Tools",
                url: "https://github.com/Redocly/awesome-docs",
                description: "A curated list of API documentation tools and resources."
            }
        ]
    },
    {
        title: 'Open Source Marketing',
        slug: 'open-source-marketing',
        description: 'Strategies for marketing open source projects and tools.',
        resources: [
            {
                title: "Marketing an Open Source Project",
                url: "https://opensource.guide/finding-users/",
                description: "A guide on marketing open source projects by GitHub."
            },
            {
                title: "Open Source Marketing Playbook",
                url: "https://github.com/github/opensource.guide/blob/main/content/getting-started/marketing-your-project.md",
                description: "A playbook for marketing open source projects by GitHub."
            }
        ]
    },
    {
        title: 'Podcast Marketing',
        slug: 'podcast-marketing',
        description: 'Tips for creating and promoting developer-focused podcasts.',
        resources: [
            {
                title: "How to Start a Developer Podcast",
                url: "https://devchat.tv/blog/how-to-start-a-developer-podcast/",
                description: "A guide on starting a developer-focused podcast by DevChat.tv."
            },
            {
                title: "Marketing Your Tech Podcast",
                url: "https://www.listennotes.com/podcast-academy/marketing-your-tech-podcast/",
                description: "Tips on promoting and marketing a tech podcast by Listen Notes."
            }
        ]
    },
    {
        title: 'Developer Experience (DX)',
        slug: 'developer-experience',
        description: 'Resources and insights on creating excellent developer experiences.',
        resources: [
            {
                title: "Good Developer Experience",
                url: "https://developerexperience.io/articles/good-developer-experience",
                description: "An article discussing what constitutes a good developer experience."
            },
            {
                title: "Why Your API Needs a Dedicated Developer Experience Team",
                url: "https://nordicapis.com/why-your-api-needs-a-dedicated-developer-experience-team/",
                description: "Insights on the importance of focusing on developer experience for APIs."
            },
            {
                title: "APIs You Won't Hate",
                url: "https://apisyouwonthate.com/",
                description: "A resource dedicated to helping create APIs with great developer experiences."
            }
        ]
    },
    {
        title: 'Developer Community Building',
        slug: 'developer-community-building',
        description: 'Strategies and insights for building and nurturing developer communities.',
        resources: [
            {
                title: "Creating a Developer Community is a $1 Billion Bet for Tech Companies",
                url: "https://therecursive.com/creating-a-developer-community-is-a-1-billion-bet-for-tech-companies/",
                description: "An article on the significant investment tech companies are making in developer communities."
            },
            {
                title: "The Business Value of Developer Relations",
                url: "https://www.amazon.com/Business-Value-Developer-Relations-Communities/dp/1484237471",
                description: "A book by Mary Thengvall on building and maintaining developer communities."
            },
            {
                title: "Building High Impact Developer Communities",
                url: "https://nader.substack.com/p/building-high-impact-developer-communities",
                description: "A comprehensive guide on building developer communities by Nader."
            }
        ]
    },
    {
        title: 'Developer Relations (DevRel) Resources',
        slug: 'devrel-resources',
        description: 'Curated resources and newsletters for staying updated on Developer Relations.',
        resources: [
            {
                title: "DevRel Weekly",
                url: "https://devrelweekly.com/",
                description: "A weekly newsletter covering the latest in developer relations and developer marketing."
            },
            {
                title: "DevRel YouTube Channel",
                url: "https://www.youtube.com/c/DevRel",
                description: "A YouTube channel dedicated to developer relations content and discussions."
            },
            {
                title: "Developer Relations and Developer Marketing: They Aren't the Same Thing",
                url: "https://aspleenic.medium.com/developer-relations-and-developer-marketing-they-arent-the-same-thing-35b896159825",
                description: "An article explaining the differences between developer relations and developer marketing."
            }
        ]
    },
    {
        title: 'Metrics and KPIs for DevRel',
        slug: 'devrel-metrics',
        description: 'Resources for measuring the success of Developer Relations programs.',
        resources: [
            {
                title: "KPIs and Metrics for DevRel Programs",
                url: "https://bitergia.com/blog/metrics/kpis-and-metrics-for-devrel-programs/",
                description: "A guide to key performance indicators and metrics for developer relations programs."
            },
            {
                title: "Measuring Developer Relations",
                url: "https://www.swyx.io/measuring-devrel",
                description: "A framework for measuring developer relations success by Swyx."
            }
        ]
    },
    {
        title: 'Company Handbooks and Strategies',
        slug: 'company-handbooks',
        description: 'Public handbooks and strategies from tech companies on developer marketing and growth.',
        resources: [
            {
                title: "GitLab Marketing Handbook",
                url: "https://handbook.gitlab.com/handbook/marketing/",
                description: "GitLab's public marketing handbook, including strategies for developer marketing."
            },
            {
                title: "PostHog Growth and Marketing Handbook",
                url: "https://posthog.com/handbook/growth/marketing",
                description: "PostHog's handbook on growth and marketing strategies."
            },
            {
                title: "Resend Handbook",
                url: "https://resend.com/handbook",
                description: "Resend's public handbook, which may include insights on developer-focused strategies."
            }
        ]
    }
];