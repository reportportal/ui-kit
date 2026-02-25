## Sortable Components

A set of components for implementing drag-and-drop sortable functionality using `react-dnd`.

### Components

#### SortableItem

A wrapper component that makes its children draggable and droppable.

##### Props:

- **id**: _string | number_, required - Unique identifier for the item
- **index**: _number_, required - Position index of the item
- **type**: _string_, optional, default = "SORTABLE_ITEM" - DnD type for grouping
- **isDisabled**: _boolean_, optional, default = false - Disables drag functionality
- **className**: _string_, optional - Additional CSS class
- **draggingClassName**: _string_, optional - CSS class applied when dragging
- **dropTargetClassName**: _string_, optional - CSS class applied when item is a drop target
- **onDrop**: _(fromIndex: number, toIndex: number) => void_, optional - Callback when item is dropped
- **hideDefaultPreview**: _boolean_, optional, default = false - Hide default browser drag preview (use with DragLayer)
- **dropDetectionMode**: _'indexBased' | 'hover'_, optional, default = 'indexBased' - Detection mode for drop position calculation:
  - `'indexBased'` - uses dragged item index comparison (item stays visible during drag)
  - `'hover'` - uses cursor position with 70% threshold (for when dragged item disappears from original position)
- **orientation**: _'vertical' | 'horizontal'_, optional, default = 'vertical' - Layout orientation:
  - `'vertical'` - drop indicator is a horizontal line (top/bottom), for vertical lists
  - `'horizontal'` - drop indicator is a vertical line (left/right), for horizontal layouts
- **isLast**: _boolean_, optional, default = false - Marks item as last in list (shows bottom drop indicator)
- **children**: _ReactNode | ((props: SortableItemRenderProps) => ReactNode)_, required - Content or render function

#### SortableList

A container component for rendering a list of sortable items.

##### Props:

- **items**: _T[]_, required - Array of items to render
- **type**: _string_, optional, default = "SORTABLE_ITEM" - DnD type for grouping
- **isDisabled**: _boolean_, optional, default = false - Disables drag functionality
- **className**: _string_, optional - Container CSS class
- **itemClassName**: _string_, optional - CSS class for each item
- **onReorder**: _(reorderedItems: T[]) => void_, required - Callback with reordered items
- **renderItem**: _(item: T, index: number, dragRef: Ref, isDragging: boolean) => ReactNode_, required - Render function for each item
- **keyExtractor**: _(item: T) => string | number_, optional - Function to extract unique key

#### TreeSortableItem

A wrapper component for tree-like structures (e.g., folders) that supports dropping **before**, **inside**, or **after** an item.

##### Props:

- **id**: _string | number_, required - Unique identifier for the item
- **index**: _number_, required - Position index of the item
- **parentId**: _string | number | null_, optional - Parent item ID for nested structures
- **type**: _string_, optional, default = "SORTABLE_ITEM" - DnD type for grouping
- **isDisabled**: _boolean_, optional, default = false - Disables drag functionality
- **acceptDrop**: _boolean_, optional, default = true - Whether this item accepts drops
- **isLast**: _boolean_, optional, default = false - Marks item as last in list (shows bottom drop indicator)
- **canDropOn**: _(draggedItem: TreeDragItem, targetId: string | number) => boolean_, optional - Custom validation function to check if item can be dropped on this target (e.g., prevent dropping a folder into itself or its descendants)
- **acceptExternalDrop**: _boolean_, optional, default = false - When true, this item accepts drag from outside the tree (e.g. test case); only "inside" drop zone is shown (no before/after)
- **externalDropType**: _string_, optional - DnD type for external items; must match the type used by the external draggable (default: `EXTERNAL_TREE_DROP` from `@common/constants/sortable`)
- **className**: _string_, optional - Additional CSS class
- **draggingClassName**: _string_, optional - CSS class applied when dragging
- **dropBeforeClassName**: _string_, optional - CSS class applied when dropping before
- **dropInsideClassName**: _string_, optional - CSS class applied when dropping inside
- **dropAfterClassName**: _string_, optional - CSS class applied when dropping after
- **onDrop**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when item is dropped
- **hideDefaultPreview**: _boolean_, optional, default = false - Hide default browser drag preview
- **children**: _ReactNode | ((props: TreeSortableItemRenderProps) => ReactNode)_, required - Content or render function

#### TreeSortableContainer

A container component that wraps `TreeSortableItem` components and provides drop confirmation functionality (popover) with Move/Duplicate/Cancel options.

##### Props:

- **children**: _ReactNode_, required - TreeSortableItem components to wrap
- **showDropConfirmation**: _boolean_, optional, default = false - Show confirmation popup on drop
- **confirmationLabels**: _DropConfirmationLabels_, optional - Custom labels for confirmation buttons (e.g., `{ move: 'Move here', duplicate: 'Copy', cancel: 'Nevermind' }`)
- **portalTarget**: _Element | null_, optional, default = document.body - DOM element to render the confirmation popup into
- **onMove**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when "Move" is selected (tree items)
- **onDuplicate**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when "Duplicate" is selected (tree items)
- **onMoveExternal**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when "Move" is selected for an external drop (e.g. test case into folder)
- **onDuplicateExternal**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when "Duplicate" is selected for an external drop
- **onCancel**: _() => void_, optional - Callback when "Cancel" is selected

#### DragLayer

Custom drag layer for rendering a custom preview while dragging.

##### Props:

- **type**: _string_, required - DnD type to match
- **renderPreview**: _(item: DragItem) => ReactNode_, required - Function to render drag preview
- **className**: _string_, optional - CSS class for the layer container
- **previewClassName**: _string_, optional - CSS class for the preview wrapper
- **portalTarget**: _Element | null_, optional, default = document.body - DOM element to render the portal into

### Hooks

#### useSortable

A reusable hook for implementing drag-and-drop sortable functionality.

##### Options:

- **id**: _string | number_, required - Unique identifier
- **index**: _number_, required - Position index
- **type**: _string_, optional - DnD type
- **isDisabled**: _boolean_, optional - Disables drag
- **onDrop**: _(fromIndex: number, toIndex: number) => void_, optional - Drop callback
- **hideDefaultPreview**: _boolean_, optional - Hide default preview
- **dropDetectionMode**: _'indexBased' | 'hover'_, optional, default = 'indexBased' - Detection mode for drop position:
  - `'indexBased'` - uses index comparison (item stays visible)
  - `'hover'` - uses cursor position (for cases where need that item disappears during drag)
- **orientation**: _'vertical' | 'horizontal'_, optional, default = 'vertical' - Layout orientation for drop zone detection and visual indicator axis
- **isLast**: _boolean_, optional - Marks item as last in list

##### Returns:

- **isDragging**: _boolean_ - Whether item is being dragged
- **isOver**: _boolean_ - Whether a dragged item is over this target
- **draggedItemIndex**: _number | null_ - Index of dragged item
- **dropPosition**: _DropPosition_ (`'top' | 'bottom' | 'left' | 'right' | null`) - Where the item would be dropped relative to the target; `'left'`/`'right'` are used for horizontal orientation
- **dragRef**: _Ref_ - Ref for drag handle element
- **dropRef**: _Ref_ - Ref for drop target element
- **previewRef**: _Ref_ - Ref for drag preview element

#### useTreeSortable

A reusable hook for implementing tree-like drag-and-drop with before/inside/after positions.

##### Options:

- **id**: _string | number_, required - Unique identifier
- **index**: _number_, required - Position index
- **parentId**: _string | number | null_, optional - Parent item ID
- **type**: _string_, optional - DnD type
- **isDisabled**: _boolean_, optional - Disables drag
- **acceptDrop**: _boolean_, optional - Whether this item accepts drops
- **canDropOn**: _(draggedItem: TreeDragItem, targetId: string | number) => boolean_, optional - Custom validation function
- **onDrop**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Drop callback
- **hideDefaultPreview**: _boolean_, optional - Hide default preview

##### Returns:

- **isDragging**: _boolean_ - Whether item is being dragged
- **isOver**: _boolean_ - Whether a dragged item is over this target
- **dropPosition**: _'before' | 'inside' | 'after' | null_ - Where the item would be dropped
- **dragRef**: _ConnectDragSource_ - Ref for drag handle element
- **dropRef**: _ConnectDropTarget_ - Ref for drop target element
- **previewRef**: _ConnectDragPreview_ - Ref for drag preview element

#### useTreeDropValidation

A reusable hook that provides validation for tree drop operations.

##### Options:

- **items**: _T[]_, required - Array of tree items (flat or nested structure)
- **childrenKey**: _'children' | 'folders'_, optional, default = 'children' - Property name for children array

##### Returns:

- **canDropOn**: _(draggedItem: TreeDragItem, targetId: string | number) => boolean_ - Validation function for drop operations

##### Example:

```tsx
const { canDropOn } = useTreeDropValidation({
  items: folders,
  childrenKey: 'folders' // or 'children'
});

// <TreeSortableItem
//   id={folder.id}
//   canDropOn={canDropOn}
//   ...
// />
```

#### External drop (e.g. test case into folder)

To allow dragging an entity from outside the tree (e.g. a test case) into folders:

1. Use the same DnD provider as the tree. For the external draggable, use `useDrag` with `type: EXTERNAL_TREE_DROP_TYPE` (from `@common/constants/sortable`) and `item: { id, type, isExternal: true, ... }`.
2. On folders that should accept the external item, set **acceptExternalDrop** on `TreeSortableItem` (and optionally **externalDropType** if not using the default).
3. On `TreeSortableContainer`, pass **onMoveExternal** and **onDuplicateExternal**; they are called when the user chooses Move/Duplicate for an external drop. The same confirmation popover is shown; only the handlers differ.

External items can only be dropped **inside** a folder (no before/after zones). Use **canDropOn** to restrict which tree items accept external drops (e.g. only folders).
