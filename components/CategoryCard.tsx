import React from 'react';

interface CategoryCardProps {
    title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title }) => {
    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{title}</h2>
        </div>
    );
};

export default CategoryCard;