import { ChangeEvent } from '../../../../node_modules/react';
import { FileValidationError as ValidationError, FileValidationOptions, FileWithValidation } from '../types';

interface FileProcessingOptions extends FileValidationOptions {
    onFilesAdded: (files: FileWithValidation[]) => void;
}
export declare const useFileProcessing: ({ maxFileSize, acceptFileMimeTypes, onFilesAdded, }: FileProcessingOptions) => {
    error: ValidationError | null;
    handleFileInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    clearError: () => void;
    onDrop: (acceptedFiles: File[]) => void;
};
export {};
