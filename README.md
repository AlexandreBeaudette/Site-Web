# Site-Web

## CSS Selectors Explained

### `ul li a`
This is a **CSS descendant selector** that targets all anchor tags (`<a>`) that are nested inside list items (`<li>`) within an unordered list (`<ul>`).

**Breaking it down:**
- `ul` = selects unordered lists
- `li` = selects list items inside the unordered list
- `a` = selects anchor (link) elements inside the list items

**Example in your code:**
```css
ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
```

This styles all the links in your navigation bar by making them display as blocks, white text, centered, with padding, and removes the underline decoration from the links.