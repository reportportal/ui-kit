/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState, useEffect } from 'react';
import type { CSSProperties, Ref } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DndProvider, useDragLayer } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { DragNDropIcon } from '@components/icons';
import { FilterItem } from '@components/filterItem';
import { SortableItem } from './sortableItem';
import { SortableList } from './sortableList';
import storyStyles from './sortable.stories.module.scss';
import { DragLayer } from './dragLayer';
import { TreeSortableItem } from './treeSortableItem';
import { TreeSortableContainer, useTreeSortableContext } from './treeSortableContainer';
import type { SortableItemProps, DragItem, TreeDragItem, TreeDropPosition } from '@common/types';
import { useTreeDropValidation } from '@common/hooks';

const meta: Meta<typeof SortableItem> = {
  title: 'DnD/Sortable',
  component: SortableItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<SortableItemProps>;

interface ListItem {
  id: number;
  name: string;
}

const itemStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  backgroundColor: 'var(--rp-ui-base-bg-000, #fff)',
  border: '1px solid #e1e5e9',
  borderRadius: '4px',
  marginBottom: '8px',
  cursor: 'grab',
};

const dragHandleStyle: CSSProperties = {
  cursor: 'grab',
  color: '#9ca3af',
  display: 'flex',
  alignItems: 'center',
};

const DragHandleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="5" cy="3" r="1.5" />
    <circle cx="11" cy="3" r="1.5" />
    <circle cx="5" cy="8" r="1.5" />
    <circle cx="11" cy="8" r="1.5" />
    <circle cx="5" cy="13" r="1.5" />
    <circle cx="11" cy="13" r="1.5" />
  </svg>
);

export const BasicSortableItem: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Drag items to reorder
        </h3>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            onDrop={handleDrop}
            isLast={index === items.length - 1}
          >
            <div style={itemStyle}>{item.name}</div>
          </SortableItem>
        ))}
      </div>
    );
  },
};

export const WithDragHandle: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Drag by handle only' },
      { id: 2, name: 'Click handle to drag' },
      { id: 3, name: 'Third item' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Use the handle (⋮⋮) to drag items
        </h3>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            onDrop={handleDrop}
            isLast={index === items.length - 1}
          >
            {({ dragRef }) => (
              <div style={itemStyle}>
                <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                  <DragHandleIcon />
                </span>
                <span>{item.name}</span>
              </div>
            )}
          </SortableItem>
        ))}
      </div>
    );
  },
};

export const UsingSortableList: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'First task' },
      { id: 2, name: 'Second task' },
      { id: 3, name: 'Third task' },
      { id: 4, name: 'Fourth task' },
      { id: 5, name: 'Fifth task' },
    ]);

    return (
      <div style={{ width: '350px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          SortableList Component
        </h3>
        <SortableList
          items={items}
          onReorder={setItems}
          renderItem={(item, _index, dragRef) => (
            <div style={itemStyle}>
              <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                <DragHandleIcon />
              </span>
              <span>{item.name}</span>
            </div>
          )}
        />
      </div>
    );
  },
};

const previewStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 16px',
  backgroundColor: '#fff',
  border: '1px solid #3b82f6',
  borderRadius: '4px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  fontSize: '14px',
  fontWeight: 500,
};

export const WithCustomDragPreview: Story = {
  render: () => {
    const CUSTOM_TYPE = 'CUSTOM_SORTABLE';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Item with custom preview' },
      { id: 2, name: 'Another draggable item' },
      { id: 3, name: 'Third draggable item' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };

    const renderPreview = (dragItem: DragItem) => {
      const item = items.find((i) => i.id === dragItem.id);
      return (
        <div style={previewStyle}>
          <DragHandleIcon />
          <span>{item?.name || 'Unknown'}</span>
        </div>
      );
    };

    return (
      <div style={{ width: '350px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Custom drag preview (styled differently from original)
        </h3>
        <DragLayer
          type={CUSTOM_TYPE}
          renderPreview={renderPreview}
          previewClassName={storyStyles['custom-drag-preview']}
        />
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            type={CUSTOM_TYPE}
            onDrop={handleDrop}
            hideDefaultPreview
            isLast={index === items.length - 1}
          >
            {({ dragRef, isDragging }) => (
              <div style={{ ...itemStyle, opacity: isDragging ? 0.5 : 1 }}>
                <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                  <DragHandleIcon />
                </span>
                <span>{item.name}</span>
              </div>
            )}
          </SortableItem>
        ))}
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items] = useState<ListItem[]>([
      { id: 1, name: 'Cannot drag this' },
      { id: 2, name: 'Also not draggable' },
      { id: 3, name: 'Disabled item' },
    ]);

    const disabledStyle: CSSProperties = {
      ...itemStyle,
      opacity: 0.5,
      cursor: 'not-allowed',
    };

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Disabled sortable items
        </h3>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            isDisabled
            isLast={index === items.length - 1}
          >
            <div style={disabledStyle}>{item.name}</div>
          </SortableItem>
        ))}
      </div>
    );
  },
};

const useHideOnDrag = (isDragging: boolean) => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isDragging) {
      timeoutId = setTimeout(() => setShouldHide(true), 50);
    } else {
      setShouldHide(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isDragging]);

  return shouldHide;
};

export const HorizontalFilterChipsWithFilterItem: Story = {
  name: 'Horizontal - Filter Chips (FilterItem)',
  render: () => {
    const FILTER_ITEM_TYPE = 'FILTER_ITEM_CHIP';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Personal 1' },
      { id: 2, name: 'API tests & Back_ST' },
      { id: 3, name: 'Regression' },
      { id: 4, name: 'Personal 2' },
      { id: 5, name: 'Attribute oriented - AT' },
      { id: 6, name: 'Functional' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [moved] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, moved);
      setItems(newItems);
    };

    const renderPreview = (dragItem: DragItem) => {
      const item = items.find((i) => i.id === dragItem.id);
      return <FilterItem id={String(dragItem.id)} caption={item?.name ?? ''} actions={[]} />;
    };

    const FilterItemContent = ({
      dragRef,
      isDragging,
      item,
    }: {
      dragRef: Ref<HTMLElement>;
      isDragging: boolean;
      item: ListItem;
    }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const shouldHide = useHideOnDrag(isDragging);
      return (
        <div
          className={storyStyles['chip-wrapper']}
          style={
            shouldHide
              ? {
                  position: 'absolute',
                  width: 0,
                  height: 0,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }
              : undefined
          }
        >
          <span ref={dragRef as Ref<HTMLSpanElement>} className={storyStyles['chip-handle']}>
            <span className={storyStyles['chip-handle-icon']}>
              <DragNDropIcon />
            </span>
          </span>
          {!shouldHide && <FilterItem id={String(item.id)} caption={item.name} actions={[]} />}
        </div>
      );
    };

    return (
      <div
        style={{
          width: '450px',
          padding: '24px 16px 16px',
          border: '1px solid #e1e5e9',
          borderRadius: '8px',
          backgroundColor: '#f9fafb',
        }}
      >
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Hover over a filter to reveal the drag handle, then drag to reorder (FilterItem)
        </h3>
        <DragLayer
          type={FILTER_ITEM_TYPE}
          renderPreview={renderPreview}
          previewClassName={storyStyles['chip-drag-preview']}
        />
        <div
          className={storyStyles['chips-list']}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 0, paddingTop: '12px' }}
        >
          {items.map((item, index) => (
            <SortableItem
              key={item.id}
              id={item.id}
              index={index}
              type={FILTER_ITEM_TYPE}
              orientation="horizontal"
              dropDetectionMode="hover"
              hideDefaultPreview
              className={storyStyles['chip-item']}
              draggingClassName={storyStyles['chip-item-dragging']}
              onDrop={handleDrop}
              isLast={index === items.length - 1}
            >
              {({ dragRef, isDragging }) => (
                <FilterItemContent dragRef={dragRef} isDragging={isDragging} item={item} />
              )}
            </SortableItem>
          ))}
        </div>
      </div>
    );
  },
};

// TreeSortableItem Stories
interface NestedFolder {
  id: number;
  name: string;
  children: NestedFolder[];
}

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h3.172a1.5 1.5 0 0 1 1.06.44l.829.828a.5.5 0 0 0 .353.147H13.5A1.5 1.5 0 0 1 15 4.914V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9z" />
  </svg>
);

const FolderOpenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3h3.172a1.5 1.5 0 0 1 1.06.44l.829.828A.5.5 0 0 0 7.914 4.5H13.5A1.5 1.5 0 0 1 15 6v.5H2V4.5z" />
    <path d="M1.5 7h13l-1.5 7H3L1.5 7z" />
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    style={{
      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
    }}
  >
    <path d="M4.5 2L9 6l-4.5 4V2z" />
  </svg>
);

const FOLDER_TYPE = 'FOLDER_ITEM';

const initialFolders: NestedFolder[] = [
  {
    id: 1,
    name: 'Documents',
    children: [
      {
        id: 11,
        name: 'Work',
        children: [
          { id: 111, name: 'Reports', children: [] },
          { id: 112, name: 'Presentations', children: [] },
        ],
      },
      {
        id: 12,
        name: 'Personal',
        children: [
          { id: 121, name: 'Photos', children: [] },
          { id: 122, name: 'Receipts', children: [] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Projects',
    children: [
      { id: 21, name: 'UI Kit', children: [] },
      { id: 22, name: 'Service UI', children: [] },
      { id: 23, name: 'API', children: [] },
    ],
  },
  {
    id: 3,
    name: 'Downloads',
    children: [],
  },
  {
    id: 4,
    name: 'Archive',
    children: [
      { id: 41, name: '2023', children: [] },
      { id: 42, name: '2024', children: [] },
    ],
  },
];

let nextFolderId = Date.now();
const getNextFolderId = () => ++nextFolderId;

const cloneFolderWithNewIds = (folder: NestedFolder): NestedFolder => ({
  ...folder,
  id: getNextFolderId(),
  children: folder.children.map(cloneFolderWithNewIds),
});

const findFolderById = (folders: NestedFolder[], id: number): NestedFolder | null => {
  for (const folder of folders) {
    if (folder.id === id) return folder;
    const found = findFolderById(folder.children, id);
    if (found) return found;
  }
  return null;
};

const getFolderName = (folders: NestedFolder[], id: number): string => {
  const folder = findFolderById(folders, id);
  return folder?.name || 'Unknown';
};

const getAllFolderNames = (folders: NestedFolder[]): string[] => {
  const names: string[] = [];

  const collectNames = (folderList: NestedFolder[]) => {
    for (const folder of folderList) {
      names.push(folder.name);
      if (folder.children.length > 0) {
        collectNames(folder.children);
      }
    }
  };

  collectNames(folders);
  return names;
};

const getNextDuplicateName = (baseName: string, existingNames: string[]): string => {
  // Check if name already has "(N)" pattern at the end
  const numberPattern = /^(.*?)\((\d+)\)$/;
  const match = baseName.match(numberPattern);
  const originalName = match ? match[1] : baseName;

  // If original name (without number) is not taken, return it
  if (!existingNames.includes(originalName)) {
    return originalName;
  }

  // Find next available number
  let counter = 1;
  while (existingNames.includes(`${originalName}(${counter})`)) {
    counter++;
  }

  return `${originalName}(${counter})`;
};

interface FolderNodeProps {
  folder: NestedFolder;
  index: number;
  depth: number;
  parentId: number | null;
  isLast: boolean;
  expandedIds: Set<number>;
  onToggle: (id: number) => void;
  canDropOn?: (draggedItem: TreeDragItem, targetId: string | number) => boolean;
  onDrop: (
    draggedItem: TreeDragItem,
    targetId: string | number,
    position: TreeDropPosition,
  ) => void;
}

const FolderNode = ({
  folder,
  index,
  depth,
  parentId,
  isLast,
  expandedIds,
  onToggle,
  canDropOn,
  onDrop,
}: FolderNodeProps) => {
  const isExpanded = expandedIds.has(folder.id);
  const hasChildren = folder.children.length > 0;

  const context = useTreeSortableContext();
  const pendingDraggedItemId = context?.pendingDraggedItemId;

  const { draggedItem } = useDragLayer((monitor) => ({
    draggedItem: monitor.getItem() as TreeDragItem | null,
  }));

  const isChildOfDragged = (() => {
    if (!canDropOn) return false;

    const sourceItem = draggedItem || (pendingDraggedItemId ? { id: pendingDraggedItemId } : null);
    if (!sourceItem) return false;

    const sourceId = String(sourceItem.id);
    const currentId = String(folder.id);

    if (sourceId === currentId) return false;

    return !canDropOn(sourceItem as TreeDragItem, folder.id);
  })();

  const folderRowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '6px 8px',
    backgroundColor: 'var(--rp-ui-base-bg-000, #fff)',
    borderRadius: '4px',
    cursor: 'grab',
    fontSize: '13px',
    userSelect: 'none',
  };

  return (
    <>
      <TreeSortableItem
        id={folder.id}
        index={index}
        parentId={parentId}
        type={FOLDER_TYPE}
        isLast={isLast}
        canDropOn={canDropOn}
        onDrop={onDrop}
        style={{
          ['--tree-item-indent' as string]: `${depth * 20}px`,
        }}
      >
        {({ isDragging, dragRef }) => (
          <div
            ref={dragRef as Ref<HTMLDivElement>}
            style={{
              ...folderRowStyle,
              paddingLeft: `${depth * 20}px`,
              opacity: isDragging || isChildOfDragged ? 0.4 : 1,
              cursor: isChildOfDragged ? 'not-allowed' : folderRowStyle.cursor,
              pointerEvents: isDragging || isChildOfDragged ? 'none' : 'auto',
            }}
          >
            <span
              onClick={(e) => {
                e.stopPropagation();
                if (hasChildren) onToggle(folder.id);
              }}
              style={{
                width: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                cursor: hasChildren ? 'pointer' : 'default',
                visibility: hasChildren ? 'visible' : 'hidden',
              }}
            >
              <ChevronIcon isExpanded={isExpanded} />
            </span>
            <span style={{ color: '#f59e0b' }}>
              {isExpanded ? <FolderOpenIcon /> : <FolderIcon />}
            </span>
            <span style={{ flex: 1 }}>{folder.name}</span>
          </div>
        )}
      </TreeSortableItem>

      {isExpanded &&
        folder.children.map((child, childIndex) => (
          <FolderNode
            key={child.id}
            folder={child}
            index={childIndex}
            depth={depth + 1}
            parentId={folder.id}
            isLast={childIndex === folder.children.length - 1}
            expandedIds={expandedIds}
            onToggle={onToggle}
            canDropOn={canDropOn}
            onDrop={onDrop}
          />
        ))}
    </>
  );
};

export const TreeSortableNested: Story = {
  name: 'Tree Sortable - Nested Folders',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [folders, setFolders] = useState<NestedFolder[]>(initialFolders);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([1, 2]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [actionLog, setActionLog] = useState<string[]>([]);

    const toggleFolder = (id: number) => {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    const expandAll = () => {
      const allIds = new Set<number>();
      const collectIds = (items: NestedFolder[]) => {
        items.forEach((item) => {
          if (item.children.length > 0) {
            allIds.add(item.id);
            collectIds(item.children);
          }
        });
      };
      collectIds(folders);
      setExpandedIds(allIds);
    };

    const collapseAll = () => {
      setExpandedIds(new Set());
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { canDropOn } = useTreeDropValidation({ items: folders });

    const removeFolder = (
      items: NestedFolder[],
      id: number,
    ): [NestedFolder[], NestedFolder | null] => {
      let removed: NestedFolder | null = null;
      const filtered = items.filter((item) => {
        if (item.id === id) {
          removed = { ...item, children: [...item.children] };
          return false;
        }
        return true;
      });

      if (!removed) {
        return [
          filtered.map((item) => {
            const [newChildren, found] = removeFolder(item.children, id);
            if (found) removed = found;
            return { ...item, children: newChildren };
          }),
          removed,
        ];
      }

      return [filtered, removed];
    };

    const insertFolder = (
      items: NestedFolder[],
      insertTargetId: number,
      folder: NestedFolder,
      pos: TreeDropPosition,
    ): NestedFolder[] => {
      const result: NestedFolder[] = [];

      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === insertTargetId) {
          if (pos === 'before') {
            result.push(folder);
            result.push({ ...item, children: [...item.children] });
          } else if (pos === 'after') {
            result.push({ ...item, children: [...item.children] });
            result.push(folder);
          } else if (pos === 'inside') {
            result.push({
              ...item,
              children: [...item.children, folder],
            });
            setExpandedIds((prev) => new Set([...prev, item.id]));
          }
        } else {
          result.push({
            ...item,
            children: insertFolder(item.children, insertTargetId, folder, pos),
          });
        }
      }

      return result;
    };

    const handleMove = (
      draggedItem: TreeDragItem,
      targetId: string | number,
      position: TreeDropPosition,
    ) => {
      const draggedName = getFolderName(folders, draggedItem.id as number);
      const targetName = getFolderName(folders, targetId as number);

      const action = `MOVED "${draggedName}" → ${position?.toUpperCase()} "${targetName}"`;
      setActionLog((prev) => [action, ...prev.slice(0, 4)]);

      const [withoutDragged, draggedFolder] = removeFolder(folders, draggedItem.id as number);

      if (draggedFolder && position) {
        const newFolders = insertFolder(
          withoutDragged,
          targetId as number,
          draggedFolder,
          position,
        );
        setFolders(newFolders);
      }
    };

    const handleDuplicate = (
      draggedItem: TreeDragItem,
      targetId: string | number,
      position: TreeDropPosition,
    ) => {
      const draggedName = getFolderName(folders, draggedItem.id as number);
      const targetName = getFolderName(folders, targetId as number);

      const action = `DUPLICATED "${draggedName}" → ${position?.toUpperCase()} "${targetName}"`;
      setActionLog((prev) => [action, ...prev.slice(0, 4)]);

      const [, draggedFolder] = removeFolder(folders, draggedItem.id as number);

      if (draggedFolder && position) {
        const existingNames = getAllFolderNames(folders);

        // Create a deep copy with new IDs for all folders and subfolders
        const duplicatedFolder = {
          ...cloneFolderWithNewIds(draggedFolder),
          name: getNextDuplicateName(draggedFolder.name, existingNames),
        };

        const newFolders = insertFolder(folders, targetId as number, duplicatedFolder, position);
        setFolders(newFolders);
      }
    };

    const handleCancel = () => {
      setActionLog((prev) => ['CANCELLED drop action', ...prev.slice(0, 4)]);
    };

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>
          Nested Folder Tree - Drag & Drop with Confirmation
        </h3>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#999' }}>
          Click chevron to expand • Drag to: top = before, middle = inside, bottom = after • Drop to
          see confirmation popup
        </p>

        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <button
            onClick={expandAll}
            style={{
              padding: '4px 12px',
              fontSize: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              backgroundColor: '#fff',
              cursor: 'pointer',
            }}
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            style={{
              padding: '4px 12px',
              fontSize: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              backgroundColor: '#fff',
              cursor: 'pointer',
            }}
          >
            Collapse All
          </button>
        </div>

        <TreeSortableContainer
          showDropConfirmation
          onMove={handleMove}
          onDuplicate={handleDuplicate}
          onCancel={handleCancel}
        >
          <div
            style={{
              border: '1px solid #e1e5e9',
              borderRadius: '8px',
              padding: '8px',
              backgroundColor: '#f9fafb',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
          >
            {folders.map((folder, index) => (
              <FolderNode
                key={folder.id}
                folder={folder}
                index={index}
                depth={0}
                parentId={null}
                isLast={index === folders.length - 1}
                expandedIds={expandedIds}
                onToggle={toggleFolder}
                canDropOn={canDropOn}
                onDrop={handleMove}
              />
            ))}
          </div>
        </TreeSortableContainer>

        {actionLog.length > 0 && (
          <div
            style={{
              marginTop: '16px',
              padding: '8px 12px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #86efac',
              borderRadius: '4px',
              fontSize: '11px',
              color: '#166534',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>Recent Actions:</div>
            {actionLog.map((action, i) => (
              <div key={i} style={{ opacity: 1 - i * 0.15 }}>
                ✓ {action}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};
