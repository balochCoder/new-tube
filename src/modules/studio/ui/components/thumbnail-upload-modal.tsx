import {ResponsiveModal} from "@/components/responsive-modal";
import {UploadDropzone} from "@/lib/uploadthing";
import {trpc} from "@/trpc/client";

interface ThumbnailUploadModalProps {
    videoId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ThumbnailUploadModal = ({videoId, open, onOpenChange}: ThumbnailUploadModalProps) => {
    const utils = trpc.useUtils();
    const onUploadComplete = async () => {
        await utils.studio.getMany.invalidate();
        await utils.studio.getOne.invalidate({id: videoId});
        onOpenChange(false);
    }
    return (
        <ResponsiveModal title="Upload a thumbnail" onOpenChange={onOpenChange} open={open}>
            <UploadDropzone
                endpoint="thumbnailUploader"
                input={{videoId}}
                onClientUploadComplete={onUploadComplete}
            />
        </ResponsiveModal>
    )
}