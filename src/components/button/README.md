## **Button**

A flexible button component with multiple variants and width adjustments. Default minimum width is 120px.

### Props:

- **type**: _'submit' | 'reset' | 'button'_, optional, default = "button"
- **disabled**: _boolean_, optional, default = false
- **variant**: _'primary' | 'ghost' | 'danger' | 'text'_, optional, default = "primary"
- **adjustWidthOn**: _'content' | 'wide-content' | 'parent' | 'min-width'_, optional, default = "min-width"
- **icon**: _ReactNode_, optional - Any React element (not just SVG icons)
- **iconPlace**: _'start' | 'end'_, optional, default = "start"
- **children**: _ReactNode_, optional - Button content/text
- **className**: _string_, optional - Custom CSS class name
- **title**: _string_, optional - Title attribute for accessibility
- **onClick**: _MouseEventHandler<HTMLButtonElement>_, optional - Click event handler

### Events:

- **onClick**: Triggered when button is clicked (disabled buttons won't trigger this)

### Variants

The Button comes with variants: _primary_ (default), _ghost_, _danger_ and _text_.

### Width Adjustments

- **content**: Natural content width
- **min-width**: Minimum width of 120px (default)
- **wide-content**: Extra padding for wider appearance
- **parent**: Full width of parent container

### Icon

All variants can be used with icons (not limited to text variant). You can pass any React element via the _icon_ prop.
The _iconPlace_ prop controls whether the icon appears at the 'start' (left) or 'end' (right) of the button text.
