# Icons Component

This directory contains SVG icons used throughout the Report Portal UI Kit.

## Icon Library

The complete icon library is available in the RP Design System:
[RP Design System - Icons](https://www.figma.com/design/G0UwEwSjuFKXrVvNa0Duw3/%E2%9A%A1%EF%B8%8F-RP-Design-System-6?node-id=41-570)

## Icon Migration Guidelines

When migrating icons from Figma to the codebase, follow these rules to ensure consistency:

### Size Requirements
- **Icon dimensions must match exactly the component size defined in the Figma Design System**
- Each icon component in Figma has a designated size (e.g., 16x16, 24x24, 32x32)
- Reference the specific icon component in Figma to verify the correct dimensions
- Example: [16x16 Icon Component](https://www.figma.com/design/G0UwEwSjuFKXrVvNa0Duw3/%E2%9A%A1%EF%B8%8F-RP-Design-System-6?node-id=668-3262&t=IhGVShEpPMmRlwQg-4)

### Implementation
- Place new icons in the `svg/` directory
- Export the icon from `index.ts`
- Use consistent naming conventions matching the RP Design System
  - Follow camelCase format with `Icon` suffix (e.g., `ChevronDownDropdownIcon`, `DeleteIcon`)
  - Maintain the same names used in Figma Design System for consistency across design and development

### Icon Colors

Icon colors should be managed dynamically using CSS, not hardcoded in the SVG:

- **Default state**: Use the enabled state color from the RP Design System
- **Interactive states** (hover, focus, active, disabled): Handle via CSS using `color` or `fill` properties

### Usage Example
```tsx
import { ChevronDownDropdownIcon } from '@components/icons';

export const MyComponent = () => (
  <ChevronDownDropdownIcon />
);
```
