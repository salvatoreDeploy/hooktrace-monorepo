import { SectionTitle } from "./section-title";

export function WebhookDetailsSkeleton() {
  return (
    <div className="flex h-full flex-col">
      {/* Header Skeleton */}
      <div className="space-y-4 border-b border-zinc-700 p-6 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="h-6 w-16 rounded bg-zinc-700" />
          <div className="h-6 w-32 rounded bg-zinc-700" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <div className="h-4 w-16 rounded bg-zinc-700" />
            <div className="h-4 w-20 rounded bg-zinc-700" />
          </div>
          <span className="w-px h-4 bg-zinc-700" />
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <div className="h-4 w-8 rounded bg-zinc-700" />
            <div className="h-4 w-24 rounded bg-zinc-700" />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6 p-6">
          {/* Overview Skeleton */}
          <div className="space-y-4">
            <SectionTitle>Request Overview</SectionTitle>
            <div className="overflow-hidden rounded-lg border border-zinc-700">
              <table className="w-full">
                {[...Array(4)].map((_, i) => (
                  <tr key={i} className="border-b border-zinc-700 last:border-0">
                    <td className="p-3 text-sm font-medium bg-zinc-800/50 border-r border-zinc-700">
                      <div className="h-4 w-24 rounded bg-zinc-700" />
                    </td>
                    <td className="p-3 text-sm font-mono">
                      <div className="h-4 w-32 rounded bg-zinc-700" />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          {/* Query Params Skeleton */}
          <div className="space-y-4">
            <SectionTitle>Query Parameters</SectionTitle>
            <div className="overflow-hidden rounded-lg border border-zinc-700">
              <table className="w-full">
                {[...Array(2)].map((_, i) => (
                  <tr key={i} className="border-b border-zinc-700 last:border-0">
                    <td className="p-3 text-sm font-medium bg-zinc-800/50 border-r border-zinc-700">
                      <div className="h-4 w-20 rounded bg-zinc-700" />
                    </td>
                    <td className="p-3 text-sm font-mono">
                      <div className="h-4 w-24 rounded bg-zinc-700" />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          {/* Headers Skeleton */}
          <div className="space-y-4">
            <SectionTitle>Headers</SectionTitle>
            <div className="overflow-hidden rounded-lg border border-zinc-700">
              <table className="w-full">
                {[...Array(3)].map((_, i) => (
                  <tr key={i} className="border-b border-zinc-700 last:border-0">
                    <td className="p-3 text-sm font-medium bg-zinc-800/50 border-r border-zinc-700">
                      <div className="h-4 w-28 rounded bg-zinc-700" />
                    </td>
                    <td className="p-3 text-sm font-mono">
                      <div className="h-4 w-36 rounded bg-zinc-700" />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          {/* Request Body Skeleton */}
          <div className="space-y-4">
            <SectionTitle>Request Body</SectionTitle>
            <div className="relative rounded-lg border border-zinc-700 overflow-x-auto">
              <div className="p-4">
                <div className="h-4 w-full max-w-xs mb-2 rounded bg-zinc-700" />
                <div className="h-4 w-3/4 mb-2 rounded bg-zinc-700" />
                <div className="h-4 w-1/2 rounded bg-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
