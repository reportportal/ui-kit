import { PropsWithChildren } from '../../../../node_modules/react';
import { VoidFn } from '../../../common/types';
import { useFileDropArea } from '../hooks/useFileDropArea';
import { useOverlayDropArea } from '../hooks/useOverlayDropArea';
import { FileValidationMessages } from '../types';

export interface FileDropAreaProviderProps extends ReturnType<typeof useFileDropArea> {
    messages: FileValidationMessages;
    isMultipleFiles?: boolean;
    isDisabled?: boolean;
    variant?: 'default' | 'overlay';
    overlayProps?: ReturnType<typeof useOverlayDropArea>;
    registerOpenFunction: (openFunc: VoidFn) => void;
    openFileDialog: VoidFn;
}
export declare const FileDropAreaContext: import('../../../../node_modules/react').Context<FileDropAreaProviderProps | null>;
export declare const FileDropAreaProvider: ({ children, ...props }: PropsWithChildren<Omit<FileDropAreaProviderProps, 'registerOpenFunction' | 'openFileDialog'>>) => import("react/jsx-runtime").JSX.Element;
