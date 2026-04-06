## **Popover with optional title and content**

### Popover props:

- **content**: _node_, required
- **children**: _node_, required
- **placement**: _string_ (Floating UI Placement), optional, default = 'bottom'
- **fallbackPlacements**: _string_ (Floating UI Placement), optional, default = 'bottom'
- **className**: _string_, optional, default = ''
- **title**: _string_, optional, default = ''
- **arrowOffset**: _number_, optional, default = 16
- **safeZone**: _number_, optional, default = 4
- **arrowColor**: _string_, optional, default = 'white'
- **dataAutomationId**: _string_, optional, default = ''
- **strategy**: _string_ (Floating UI Strategy), optional, default = 'absolute'
- **transitionDuration**: _number_ or _object_ ({ open?: number, close?: number }), optional, default = 0
- **isCentered**: _bool_, optional, default = true
- **isFocusDisabled**: _bool_, optional, default = false
- **isOpened**: _bool_, optional, default = false
- **shouldUsePortal**: _bool_, optional, default = false
- **setIsOpened**: _func_, optional, default = undefined

### Size

Min height is 52px.
Min width is 160px.
