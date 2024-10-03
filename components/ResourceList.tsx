import React from 'react';

interface Resource {
    id: string;
    title: string;
    description: string;
    url: string;
}

interface ResourceListProps {
    resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
    return (
        <ul className="space-y-4">
            {resources.map((resource) => (
                <li key={resource.id} className="border rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {resource.title}
                        </a>
                    </h3>
                    <p className="text-gray-600">{resource.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default ResourceList;