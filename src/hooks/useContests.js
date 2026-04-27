import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useContests = (options = {}) => {
  return useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const response = await api.get("/contests");
      return response.data.contests || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 2,
    ...options,
  });
};

export const getPopularContests = (contests) => {
  return contests
    .sort((a, b) => (b.participants?.length || 0) - (a.participants?.length || 0))
    .slice(0, 5);
};
