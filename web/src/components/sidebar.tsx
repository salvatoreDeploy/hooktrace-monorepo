import { CopyIcon } from "lucide-react";
import { IconButton } from "./ui/icon-button";
import { WebhookList } from "./webhooks-list";
import { Suspense } from "react";
import { WebhooksListItemSkeleton } from "./webhook-list-item-skeleton";

export function Sidebar() {

  return (
    <div className="flex h-screen flex-col">
      <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-5">
        <div className="flex items-baseline">
          <span className="font-semibold text-zinc-100">Hook</span>
          <span className="font-normal text-zinc-400">.Trace</span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-2.5">
        <div className="flex-1 min-w-0 flex items-center gap-1 text-xs font-mono text-zinc-300">
          <span className="truncate">http://localhost:3000/teste/id=123456</span>
        </div>

        <IconButton icon={<CopyIcon className="size-4" />} />
      </div>

      <Suspense fallback={
        <div className="flex flex-col gap-1 px-2 pt-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <WebhooksListItemSkeleton key={i} />
          ))}
        </div>
      }>
        <WebhookList />
      </Suspense>
    </div>
  )
}