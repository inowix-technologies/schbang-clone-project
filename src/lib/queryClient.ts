import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Default fetcher function for queries
export const apiRequest = async (endpoint: string, options?: RequestInit) => {
  const url = endpoint.startsWith('/') ? `/api${endpoint}` : endpoint;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Helper function for making API requests
export const makeApiRequest = async (endpoint: string, options?: RequestInit) => {
  return apiRequest(endpoint, options);
};