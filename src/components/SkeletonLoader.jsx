import { motion } from "framer-motion";

export const ContestCardSkeleton = () => {
  const shimmer = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
    },
  };

  return (
    <motion.div
      variants={shimmer}
      animate="animate"
      transition={{ duration: 2, repeat: Infinity }}
      className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        backgroundSize: "200% 100%",
      }}
    >
      <div className="w-full h-32 bg-gray-300 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
    </motion.div>
  );
};

export const ContestCardSkeletonGrid = ({ count = 5 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ContestCardSkeleton key={i} />
      ))}
    </div>
  );
};
