// app/public/components/FolderCard.tsx
import Link from 'next/link';
import React from 'react';

type FolderCardProps = {
    title: string;
    description: string;
    href: string;
};

const FolderCard: React.FC<FolderCardProps> = ({ title, description, href }) => {
    return (
        <Link href={href}>
            <div className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Folder tab effect */}
                <div className="mb-3 h-3 w-12 rounded-t-md bg-primary/70" />

                <h3 className="text-lg font-semibold group-hover:text-primary">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default FolderCard;
