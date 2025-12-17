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

#### DragLayer

Custom drag layer for rendering a custom preview while dragging.

##### Props:
 
- **type**: _string_, required - DnD type to match
- **renderPreview**: _(item: DragItem) => ReactNode_, required - Function to render drag preview
- **className**: _string_, optional - CSS class for the layer container
- **previewClassName**: _string_, optional - CSS class for the preview wrapper
- **portalTarget**: _Element | null_, optional, default = document.body - DOM element to render the portal into

### Hook

#### useSortable

A reusable hook for implementing drag-and-drop sortable functionality.

##### Options:

- **id**: _string | number_, required - Unique identifier
- **index**: _number_, required - Position index
- **type**: _string_, optional - DnD type
- **isDisabled**: _boolean_, optional - Disables drag
- **onDrop**: _(fromIndex: number, toIndex: number) => void_, optional - Drop callback
- **hideDefaultPreview**: _boolean_, optional - Hide default preview
- **isLast**: _boolean_, optional - Marks item as last in list
 
##### Returns:

- **isDragging**: _boolean_ - Whether item is being dragged
- **isOver**: _boolean_ - Whether a dragged item is over this target
- **draggedItemIndex**: _number | null_ - Index of dragged item
- **dropPosition**: _'top' | 'bottom' | null_ - Where the item would be dropped
- **dragRef**: _Ref_ - Ref for drag handle element
- **dropRef**: _Ref_ - Ref for drop target element
- **previewRef**: _Ref_ - Ref for drag preview element

