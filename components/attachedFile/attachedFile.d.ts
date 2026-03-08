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
    withPreview?: boolean;
    textPosition?: 'bottom' | 'right';
    imageSrc?: string;
}
export declare const AttachedFile: ({ fileName, size, uploadingProgress, isUploadFailed, uploadFailedMessage, isUploading, isFullWidth, onDownload, onRemove, withPreview, textPosition, imageSrc, }: AttachedFileProps) => import("react/jsx-runtime").JSX.Element;
