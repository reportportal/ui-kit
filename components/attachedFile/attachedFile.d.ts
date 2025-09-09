import { VoidFn } from '../../common/types';

export interface AttachedFileProps {
    fileName: string;
    size: number;
    isFullWidth?: boolean;
    uploadingProgress?: number;
    isUploading?: boolean;
    isUploadFailed?: boolean;
    uploadFailedMessage?: string;
    onRemove?: VoidFn;
    onDownload?: VoidFn;
}
export declare const AttachedFile: ({ fileName, size, uploadingProgress, isUploadFailed, uploadFailedMessage, isUploading, isFullWidth, onDownload, onRemove, }: AttachedFileProps) => import("react/jsx-runtime").JSX.Element;
