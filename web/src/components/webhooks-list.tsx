import { useSuspenseInfiniteQuery, } from "@tanstack/react-query";
import { WebhooksListItem } from "./webhook-list-item";
import { webhookListSchema } from "../http/schemas/webhooks";
import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";

export function WebhookList() {

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const { data, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['webhooks'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/api/webhooks')
      const data = await response.json()

      return webhookListSchema.parse(data)
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined
    },
    initialPageParam: undefined
  })

  const webhooks = data.pages.flatMap(page => page.webhooks)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
    })

    if (loadMoreRef.current

    ) {
      observer.observe(loadMoreRef.current)
    }
  }, [])

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-1 p-2">
        {webhooks.map(webhook => {
          return <WebhooksListItem key={webhook.id} webhook={webhook} />
        })}
      </div>

      {hasNextPage && (
        <div className="p-2" ref={loadMoreRef}>
          {isFetchingNextPage && (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="size-5 animate-spin text-zinc-700" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}