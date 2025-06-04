'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroMobile = () => {
  return (
    <motion.div
      className="flex flex-col items-center text-center px-4 pt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-bold mb-4 leading-snug">
        Hi, I’m Mawuli — building digital products that work.
      </h1>
      <p className="text-muted-foreground mb-6 text-justify">
        Fullstack Developer with expertise in React, Next.js, Node.js, Angular, and Flutter. Proven success building scalable applications across web and mobile platforms. Available for remote roles worldwide.
        {/* Crafting digital solutions that blend technical excellence with strategic marketing insights. */}
      </p>

       <Image
        // src="/mawuli.jpg"
        src="/image/mawuli-stephen.jpg"

        alt="Mawuli"
        width={220}
        height={220}
        className="rounded-full object-cover border-4 border-white shadow-md mb-6"
      /> 
{/* 
      <Image
        src="/image/mawuli-stephen.jpg"
        alt="Mawuli"
        width={500}
        height={220}
        className="rounded-lg object-cover  border-white  mb-6"
      /> */}

      <Link href="/contact">
        <button className="btn  rounded-lg">
          Let&apos;s Collaborate
        </button>
      </Link>
    </motion.div>
  );
};

export default HeroMobile;
