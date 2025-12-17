import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const renderWithDnd = (ui: ReactElement) => {
  return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
};
