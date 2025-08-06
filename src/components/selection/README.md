## **Selection**

Decomposition:

- Selection
  ---SelectedCounter - props:
  `selectedCount: number;` - visible selected count
  `onClearSelection: ClearSelection;` - callback for clear outside state with selection(click on button)
  `captions?: {selected?: string; buttonCaption?: string;};` - text config to support localization
  `icon?: React.ReactNode;` - possibility to pass custom icon to the button
