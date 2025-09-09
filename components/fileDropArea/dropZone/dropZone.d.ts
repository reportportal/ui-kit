import { ReactNode } from '../../../../node_modules/react';

interface DropZoneProps {
    icon: ReactNode;
    description?: ReactNode;
    fileSizeMessage?: string;
    className?: string;
}
export declare const DropZone: ({ icon, description, fileSizeMessage, className }: DropZoneProps) => import("react/jsx-runtime").JSX.Element;
export {};
