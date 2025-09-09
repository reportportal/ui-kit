import { ChangeEvent } from '../../../../node_modules/react';
import { FileValidationError as ValidationError, FileValidationOptions, FileWithValidation } from '../types';

interface FileProcessingOptions extends FileValidationOptions {
    onFilesAdded: (files: FileWithValidation[]) => void;
}
export declare const useFileProcessing: ({ maxFileSize, acceptFileMimeTypes, onFilesAdded, }: FileProcessingOptions) => {
    onDrop: (acceptedFiles: File[]) => void;
    handleFileInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error: ValidationError | null;
    clearError: () => void;
};
export {};
