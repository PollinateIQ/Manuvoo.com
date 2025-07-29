"use client";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
  scrollYProgress: MotionValue<number>;
  dataLength: number;
}

const TimelineItem = ({ item, index, scrollYProgress, dataLength }: TimelineItemProps) => {
  // Parallax effect: each section transforms based on scroll progress
  const sectionProgress = useTransform(
    scrollYProgress,
    [index / dataLength, (index + 1) / dataLength],
    [0, 1]
  );
  
  // Header parallax transforms
  const headerY = useTransform(sectionProgress, [0, 1], [0, -20]);
  const headerOpacity = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  
  // Content parallax transforms  
  const contentY = useTransform(sectionProgress, [0, 1], [10, -10]);
  const contentOpacity = useTransform(sectionProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const contentScale = useTransform(sectionProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.div 
      key={index}
      className="w-full flex flex-col relative"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Section Header with Parallax */}
      <motion.div 
        className="bg-transparent backdrop-blur-sm sticky top-0 z-50"
        style={{
          y: headerY,
          opacity: headerOpacity
        }}
      >
        <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl mb-3 font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {item.title}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        className="px-4 md:px-8 lg:px-16 pt-2 pb-12"
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale
        }}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {item.content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="w-full font-sans">
      {/* Main Container with Scroll Snap */}
      <div 
        ref={containerRef}
        className="h-screen overflow-y-scroll scroll-smooth scrollbar-hide"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {data.map((item, index) => (
          <TimelineItem 
            key={index}
            item={item}
            index={index}
            scrollYProgress={scrollYProgress}
            dataLength={data.length}
          />
        ))}
      </div>
    </div>
  );
};
