export interface AdaptiveTagListProps {
    tags: string[];
    isShowAllView?: boolean;
    defaultVisibleLines?: number;
    onRemoveTag?: (tag: string) => void;
    noTagsMessage?: string;
    showAllText?: string;
    hideAllText?: string;
    showLessText?: string;
}
export declare const AdaptiveTagList: ({ tags, isShowAllView, defaultVisibleLines, onRemoveTag, noTagsMessage, showAllText, hideAllText, showLessText, }: AdaptiveTagListProps) => import("react/jsx-runtime").JSX.Element;
