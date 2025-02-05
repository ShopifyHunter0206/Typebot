import { env } from "@typebot.io/env";
import { PostHog } from "posthog-node";
import type { TelemetryEvent } from "./schemas";

export const trackEvents = async (events: TelemetryEvent[]) => {
  if (!env.NEXT_PUBLIC_POSTHOG_KEY) return;
  const client = new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: env.NEXT_PUBLIC_POSTHOG_HOST,
  });

  events.forEach(async (event) => {
    const groups: { workspace?: string; typebot?: string } = {};
    if ("workspaceId" in event) groups["workspace"] = event.workspaceId;
    if ("typebotId" in event) groups["typebot"] = event.typebotId;
    client.capture({
      distinctId: "userId" in event ? event.userId : event.visitorId,
      event: event.name,
      properties: "data" in event ? event.data : undefined,
      groups,
    });
  });

  try {
    await client.shutdownAsync();
  } catch (err) {
    console.error("ERROR while tracking events", err);
  }
};
