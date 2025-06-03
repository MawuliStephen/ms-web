'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroDesktop = () => {
  return (
    <motion.section
      className="max-w-screen-xl mx-auto px-8 py-20 flex items-center gap-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Left text content */}
      <div className="flex-1 text-left">
        <h1 className="text-5xl font-bold mb-6 leading-tight max-w-lg">
          Hi, I’m Mawuli — building digital products that work.
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          I craft digital solutions that blend technical excellence with strategic marketing insights.
        </p>
        <Link href="/contact">
          <button className="btn px-6 py-3 rounded-lg text-lg">
            Let&apos;s Collaborate
          </button>
        </Link>
      </div>

      {/* Right image */}
      <div className="flex-1 max-w-sm relative rounded-full border-4 border-white shadow-lg overflow-hidden">
        <Image
          src="/mawuli.jpg"
          alt="Mawuli"
          width={320}
          height={320}
          className="object-cover rounded-full"
          priority
        />
      </div>
    </motion.section>
  );
};

export default HeroDesktop;
