import { VideoView } from "@/modules/videos/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";
import React from "react";

interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}

export const dynamic = "force-dynamic";
const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  void trpc.videos.getOne.prefetch({ id: videoId });
  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
};

export default Page;
