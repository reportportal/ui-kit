import { CSSProperties } from '../../../node_modules/react';
import { XYCoord } from 'react-dnd';
import { DropPosition } from '../../common/types';

export declare const getPreviewStyles: (clientOffset: XYCoord | null) => CSSProperties;
export declare const calculateCursorBasedDropIndex: ({ fromIndex, targetIndex, isTopZone, }: {
    fromIndex: number;
    targetIndex: number;
    isTopZone: boolean;
}) => number;
export declare const getDropZone: (cursorY: number, elementHeight: number) => DropPosition;
export declare const getDropZoneHorizontal: (cursorX: number, elementWidth: number) => DropPosition;
