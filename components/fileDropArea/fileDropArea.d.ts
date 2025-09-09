import { FC, PropsWithChildren } from '../../../node_modules/react';
import { BrowseButton } from './browseButton';
import { ErrorMessage } from './errorMessage';
import { DropZone } from './dropZone';
import { AttachedFilesList } from './attachedFilesList';
import { FileDropAreaBaseConfig, FileWithValidation } from './types';

interface FileDropAreaProps extends FileDropAreaBaseConfig {
    variant?: 'default' | 'overlay';
    onFilesAdded: (files: FileWithValidation[]) => void;
}
interface FileDropAreaComposite extends FC<PropsWithChildren<FileDropAreaProps>> {
    DropZone: typeof DropZone;
    BrowseButton: typeof BrowseButton;
    Error: typeof ErrorMessage;
    AttachedFilesList: typeof AttachedFilesList;
}
export declare const FileDropArea: FileDropAreaComposite;
export {};
