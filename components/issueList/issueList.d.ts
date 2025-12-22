import { ReactNode } from '../../../node_modules/react';

export interface Issue {
    key: string;
    name: string;
    link?: string;
}
export interface IssueListProps {
    issues: Issue[];
    isExpanded?: boolean;
    onIssueClick?: (issue: Issue) => void;
    onIssueRemove?: (issue: Issue) => void;
    onCounterClick?: () => void;
    renderTooltip?: (issue: Issue) => ReactNode;
    tooltipPortalRoot?: Element;
    className?: string;
}
export declare const IssueList: ({ issues, isExpanded, onIssueClick, onIssueRemove, onCounterClick, renderTooltip, tooltipPortalRoot, className, }: IssueListProps) => import("react/jsx-runtime").JSX.Element | null;
