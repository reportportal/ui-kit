## **Breadcrumbs with optional url and paths**

### Description:

Breadcrumbs with possibility of ellipsis in the middle of each link that exceeds the size.
By default, shows the first breadcrumb plus up to 4 additional breadcrumbs (total of 5 maximum).
If there is only 1 link, it displays as a single breadcrumb (not automatically a "back" button).
By default, when there are more than 5 links, it shows the first one, hides the middle ones in the meatball menu, and shows the last 4 (this can be configured with `maxShownDescriptors`).
Optionally displays a tree icon that shows a hierarchical navigation menu in a popover.
The tree menu reuses the Breadcrumb component for consistent styling and behavior.

### Props:

- **descriptors**: _array_ of {
  **title**: _string_ or _ReactNode_,
  **link**: _object_ or _string_, optional
  **onClick**: _func_, optional, default = () => {}
  }, optional, default = []
- **dataAutomationId**: _string_, optional, default = ''
- **LinkComponent**: _React.ComponentType_, optional, custom link component for navigation
- **tree**: _array_ of TreeDescriptor, optional, hierarchical tree structure for the tree menu
- **isBackButton**: _boolean_, optional, default = false. When true and descriptors.length === 1, displays as a back button with left-pointing arrow
- **isLastClickable**: _boolean_, optional, default = false. When true, the last breadcrumb remains clickable
- **maxShownDescriptors**: _number_, optional, default = 5. Maximum number of breadcrumbs shown inline before collapsing middle items into the meatball menu

### TreeDescriptor Interface:

```typescript
interface TreeDescriptor extends BreadcrumbDescriptor {
  link: object | string; // Required for tree nodes - can be object (for LinkComponent) or string (for href)
  children?: TreeDescriptor[];
}
```

### Breadcrumb Variants:

The Breadcrumb component supports different visual variants:
- **default**: Standard breadcrumb styling
- **dark**: Dark theme variant for use in tree menus

### Example

```jsx
// Using object links (for LinkComponent like React Router)
const breadcrumbs = [
  { title: 'Home', link: { pathname: '/' } },
  { title: 'Projects', link: { pathname: '/projects' } },
  { title: 'Project Alpha', link: { pathname: '/projects/alpha' } }
];

// Using string links (for regular href)
const breadcrumbsWithStrings = [
  { title: 'Home', link: '/' },
  { title: 'Projects', link: '/projects' },
  { title: 'Project Alpha', link: '/projects/alpha' }
];

// Mixed link types
const mixedBreadcrumbs = [
  { title: 'Home', link: '/' },
  { title: 'Projects', link: { pathname: '/projects', search: '?filter=active' } },
  { title: 'Project Alpha', link: '/projects/alpha' }
];

// Single breadcrumb as current location
const currentLocation = [
  { title: 'Current Page', link: { pathname: '/current' } }
];

// Back button
const backButton = [
  { title: 'Back', link: { pathname: '/previous' } }
];

const tree = [
  {
    title: 'All Organizations',
    link: { pathname: '/organizations' },
    children: [
      {
        title: 'Sport',
        link: '/organizations/sport', // String link
        children: [
          {
            title: 'Adidas',
            link: { pathname: '/organizations/adidas' } // Object link
          }
        ]
      }
    ]
  }
];

// Regular breadcrumbs
<Breadcrumbs 
  descriptors={breadcrumbs} 
  tree={tree}
/>

// Single breadcrumb (current location)
<Breadcrumbs descriptors={currentLocation} />

// Back button
<Breadcrumbs descriptors={backButton} isBackButton={true} />
```

### Behavior Details:

- **1-N breadcrumbs**: All breadcrumbs are shown normally when `descriptors.length <= maxShownDescriptors`
- **N+1+ breadcrumbs**: Shows first breadcrumb + meatball menu (containing hidden middle breadcrumbs) + last `maxShownDescriptors - 1` breadcrumbs
- **Clickable behavior**: By default, only the last breadcrumb is non-clickable (represents current page); set `isLastClickable` to make it clickable
- **Title truncation**: Long titles are automatically truncated with ellipsis based on available space

### Tree Component Features:

- **Reuses Breadcrumb Component**: Tree menu items use the same Breadcrumb component for consistent styling and behavior
- **Hierarchical Display**: Supports unlimited nesting levels with proper indentation
- **Required Links**: All tree nodes must have a link property for navigation
- **Click Handlers**: Supports individual node onClick handlers
- **Link Integration**: Works seamlessly with custom LinkComponent props
- **Variant Support**: Tree breadcrumbs use the 'dark' variant for visual distinction
