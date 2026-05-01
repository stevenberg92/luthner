'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollRevealProps {
  children: string;
  className?: string;
  as?: 'p' | 'h2' | 'h3' | 'span';
  baseColor?: string;
  highlightColor?: string;
}

export default function ScrollReveal({
  children,
  className = '',
  as = 'p',
  baseColor = '#D4D0C8',
  highlightColor = '#1C1C1C',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.15'],
  });

  const words = children.split(' ');
  const Tag = as;

  return (
    <div ref={ref} className="relative">
      <Tag className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end   = start + 1 / words.length;
          return (
            <Word
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[start, end]}
              baseColor={baseColor}
              highlightColor={highlightColor}
            >
              {word}
            </Word>
          );
        })}
      </Tag>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
  baseColor,
  highlightColor,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  baseColor: string;
  highlightColor: string;
}) {
  const color   = useTransform(progress, range, [baseColor, highlightColor]);
  const opacity = useTransform(progress, range, [0.35, 1]);
  return (
    <motion.span style={{ color, opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}
