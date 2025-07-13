## 2025-07-10 – DualHero UX/CLS improvements

### Components Affected
- `src/components/landing/dual-hero.tsx`
- `src/components/ui/card-stack.tsx`

### Key Changes
1. Added `framer-motion` `<AnimatePresence>` / `<motion.div>` to cross-fade between Customer & Restaurant personas.
2. Replaced `setTimeout` auto-rotate with interval inside `useEffect` (rotation every 8 s; no dependency array to avoid reset).
3. Applied `min-h-[580px]` to content column to prevent vertical shift; removed duplicate stats grid.
4. In `card-stack.tsx`   
   • Added `sizes` & `priority` props to `next/image` for first card to reserve space and reduce CLS.  
   • (Optional offset & scale props unchanged.)

### Outcome
- Hero section no longer jumps when view changes or auto-rotates.
- Cumulative Layout Shift (CLS) much lower.
- Smoother, more polished persona transition.
