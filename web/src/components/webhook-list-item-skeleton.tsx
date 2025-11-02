import { Checkbox } from "./ui/checkbox"

export function WebhooksListItemSkeleton() {
  return (
    <div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
      <div className="flex items-center gap-3 px-4 py-2.5">
        <Checkbox disabled className="opacity-60" />
        <div className="flex flex-1 min-w-0 items-start gap-3">
          <span className="w-12 shrink-0 font-mono text-xs font-semibold text-zinc-500 text-right">
            <span className="inline-block w-8 h-3 bg-zinc-700 rounded animate-pulse" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="truncate text-xs">
              <span className="inline-block w-32 h-3 bg-zinc-700 rounded animate-pulse" />
            </p>
            <p className="text-xs">
              <span className="inline-block w-20 h-3 bg-zinc-700 rounded animate-pulse mt-1" />
            </p>
          </div>
        </div>
        <div className="w-7 h-7 rounded bg-zinc-700 animate-pulse" />
      </div>
    </div>
  )
}
