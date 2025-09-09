import { FileValidationError } from '../types';

export interface AttachmentFile {
    id: string;
    fileName: string;
    file: File;
    size: number;
    uploadingProgress?: number;
    isUploadFailed?: boolean;
    isUploading?: boolean;
    validationErrors?: FileValidationError[];
}
interface AttachedFilesListProps {
    files: AttachmentFile[];
    className?: string;
    onRemoveFile: (fileId: string) => void;
    onDownloadFile?: (file: AttachmentFile) => void;
}
export declare const AttachedFilesList: ({ files, className, onRemoveFile, onDownloadFile, }: AttachedFilesListProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
