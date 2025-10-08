import { FileValidationError, FileValidationMessages } from '../types';

export declare const getValidationErrorMessage: (errors: FileValidationError[], messages: FileValidationMessages, customErrorMessage?: string) => string | null;
