"use client";
import {Button} from "@/components/ui/button";
import {Loader, PlusIcon} from "lucide-react";
import {trpc} from "@/trpc/client";
import {toast} from "sonner";

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
        <Button variant="secondary" onClick={() => create.mutate()} disabled={create.isPending}>
            {
                create.isPending ? <Loader className="animate-spin"/> : <PlusIcon/>
            }
            Create
        </Button>
    )
}