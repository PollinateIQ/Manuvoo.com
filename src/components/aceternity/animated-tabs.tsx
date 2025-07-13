"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface AnimatedTabsProps {
  tabs: Tab[]
  className?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
}

export const AnimatedTabs = ({
  tabs,
  className,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Buttons */}
      <div className="flex space-x-1 rounded-xl bg-white/5 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative rounded-lg px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2",
              tabClassName,
              activeTab === tab.id 
                ? cn("text-white", activeTabClassName)
                : "text-white/60 hover:text-white/80"
            )}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white/20 rounded-lg"
                style={{ borderRadius: 8 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20 flex items-center space-x-2">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn("mt-4", contentClassName)}>
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={false}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 10,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              activeTab === tab.id ? "block" : "hidden"
            )}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Enhanced version with slide animation
export const SlidingTabs = ({
  tabs,
  className,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab)

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Buttons */}
      <div className="relative flex space-x-1 rounded-xl bg-white/5 p-1">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative rounded-lg px-4 py-2 text-sm font-medium text-white transition focus-visible:outline-2 flex-1",
              tabClassName,
              activeTab === tab.id 
                ? cn("text-white", activeTabClassName)
                : "text-white/60 hover:text-white/80"
            )}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span className="relative z-20 flex items-center justify-center space-x-2">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </span>
          </button>
        ))}
        
        {/* Sliding indicator */}
        <motion.div
          className="absolute top-1 bottom-1 bg-gradient-to-r from-primary-blue-start to-secondary-purple-start rounded-lg"
          initial={false}
          animate={{
            x: `${activeIndex * 100}%`,
            width: `${100 / tabs.length}%`,
          }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          style={{
            width: `calc(${100 / tabs.length}% - 4px)`,
            margin: "2px",
          }}
        />
      </div>

      {/* Tab Content with slide animation */}
      <div className={cn("relative mt-6 overflow-hidden", contentClassName)}>
        <motion.div
          className="flex"
          animate={{
            x: `-${activeIndex * 100}%`,
          }}
          transition={{
            type: "spring",
            bounce: 0.1,
            duration: 0.6,
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="w-full flex-shrink-0"
            >
              {tab.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}