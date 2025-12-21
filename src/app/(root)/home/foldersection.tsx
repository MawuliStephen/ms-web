// app/public/home/folders-section.tsx
import React from 'react';
import FolderCard from '../components/Folder/folder';

const FoldersSection = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 py-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FolderCard
                    title="Projects"
                    description="A collection of things I’ve built and worked on."
                    href="/projects"
                />

                <FolderCard
                    title="Tech Stack"
                    description="Technologies, tools, and frameworks I use."
                    href="/tech-stack"
                />
            </div>
        </section>
    );
};

export default FoldersSection;
