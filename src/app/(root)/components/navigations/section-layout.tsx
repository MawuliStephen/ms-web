import React from 'react';

export const SectionLayout = ({ 
  children,
  id,
  className = '',
  hasBackdrop = false
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  hasBackdrop?: boolean;
}) => (
  <section 
    id={id}
    className={`relative py-16 px-6 md:px-20 dark:bg-dark-background text-gray-500 dark:text-foreground ${className}`}
  >
    {hasBackdrop && (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20 dark:opacity-30 -z-10" />
    )}
    <div className="relative z-10 max-w-screen-xl mx-auto">
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ 
  title, 
  description 
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-16 text-center">
    <div className="flex flex-col space-y-2 mb-8">
      {[...Array(3)].map((_, i) => (
        <hr key={i} className="border-t border-gray-200 dark:border-gray-700/50" />
      ))}
    </div>
    <h2 className="text-3xl font-bold mb-4 dark:text-foreground">
      {title}
      <span className="text-primary">.</span>
    </h2>
    <p className="text-lg md:text-xl max-w-2xl mx-auto dark:text-foreground/80">
      {description}
    </p>
  </div>
);