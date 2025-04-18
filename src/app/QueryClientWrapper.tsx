// app/QueryClientWrapper.tsx (new file)
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize the QueryClient
const queryClient = new QueryClient();

export default function QueryClientWrapper({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
