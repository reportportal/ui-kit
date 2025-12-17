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
- **onMove**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when "Move" is selected
- **onDuplicate**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Callback when "Duplicate" is selected
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

##### Returns:

- **isDragging**: _boolean_ - Whether item is being dragged
- **isOver**: _boolean_ - Whether a dragged item is over this target
- **draggedItemIndex**: _number | null_ - Index of dragged item
- **dropPosition**: _'top' | 'bottom' | null_ - Where the item would be dropped
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
- **onDrop**: _(draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void_, optional - Drop callback
- **hideDefaultPreview**: _boolean_, optional - Hide default preview

##### Returns:

- **isDragging**: _boolean_ - Whether item is being dragged
- **isOver**: _boolean_ - Whether a dragged item is over this target
- **dropPosition**: _'before' | 'inside' | 'after' | null_ - Where the item would be dropped
- **dragRef**: _ConnectDragSource_ - Ref for drag handle element
- **dropRef**: _ConnectDropTarget_ - Ref for drop target element
- **previewRef**: _ConnectDragPreview_ - Ref for drag preview element
