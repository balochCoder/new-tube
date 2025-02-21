"use client";
import {Loader, PlusIcon} from "lucide-react";
import {toast} from "sonner";

import {trpc} from "@/trpc/client";

import {Button} from "@/components/ui/button";
import {ResponsiveModal} from "@/components/responsive-modal";

import {StudioUploader} from "@/modules/studio/ui/components/studio-uploader";

export const StudioUploadModal = () => {
    const utils = trpc.useUtils();

    const create = trpc.videos.create.useMutation({
        onSuccess: async () => {
            toast.success("Video Created")
            await utils.studio.getMany.invalidate()
        },
        // onError: err => {
        //     toast.error(err.message)
        // }
    });
    return (
        <>
            <ResponsiveModal open={!!create.data?.url} title="Upload a video" onOpenChange={() => create.reset()}>
                {
                    create.data?.url
                        ? <StudioUploader endpoint={create.data.url} onSuccess={()=>{}}/>
                        : <Loader className="animate-spin"/>
                }
            </ResponsiveModal>
            <Button variant="secondary" onClick={() => create.mutate()} disabled={create.isPending}>
                {
                    create.isPending ? <Loader className="animate-spin"/> : <PlusIcon/>
                }
                Create
            </Button>
        </>
    )
}