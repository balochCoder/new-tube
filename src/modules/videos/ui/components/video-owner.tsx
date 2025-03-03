import React from "react";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";

import { SubscriptionButton } from "@/modules/subscriptions/ui/components/subscription-button";
import { VideoGetOneOutput } from "@/modules/videos/type";
import { UserInfo } from "@/modules/users/ui/components/user-info";

import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";

interface VideoOwnerProps {
  user: VideoGetOneOutput["user"];
  videoId: string;
}

export const VideoOwner = ({ user, videoId }: VideoOwnerProps) => {
  const { userId: clerkUserId } = useAuth();

  return (
    <div className="flex items-center sm:items-start justify-between sm:justify-start gap-3 min-w-0">
      <Link href={`/users/${user.id}`}>
        <div className="flex items-center gap-3 min-w-0">
          <UserAvatar size="lg" imageUrl={user.imageUrl} name={user.name} />
          <div className="flex flex-col gap-1 min-w-0">
            <UserInfo name={user.name} size="lg" />
            <span className="text-sm text-muted-foreground line-clamp-1">
              {/* TODO: properly fill subscriber count */}
              {0} subscribers
            </span>
          </div>
        </div>
      </Link>
      {clerkUserId === user.clerkId ? (
        <Button variant="secondary" className="rounded-full">
          <Link href={`/studio/videos/${videoId}`}>Edit Video</Link>
        </Button>
      ) : (
        <SubscriptionButton onClick={() => {}} disabled={false} />
      )}
    </div>
  );
};
