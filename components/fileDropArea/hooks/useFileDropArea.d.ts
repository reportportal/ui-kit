import { FileDropAreaBaseConfig, FileWithValidation } from '../types';

interface UseFileDropAreaOptions extends FileDropAreaBaseConfig {
    onFilesAdded: (files: FileWithValidation[]) => void;
}
export declare const useFileDropArea: ({ maxFileSize, acceptFileMimeTypes, onFilesAdded, }: UseFileDropAreaOptions) => {
    error: import('../types').FileValidationError | null;
    onDrop: (acceptedFiles: File[]) => void;
    handleDropzoneClick: () => void;
    handleFileInputChange: (event: import('../../../../node_modules/react').ChangeEvent<HTMLInputElement>) => void;
    clearError: () => void;
};
export {};
