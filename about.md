---
remarks: nav.md acts as the navigation map for the entire site. The layout setting can be either 'none', 'heading', or 'tags'. When it is set to none, the entire nav.md contents are used as a single navigation menu; otherwise, the navigation is split into two menus, one of which acts as a filter for the items displayed in the other menu. When rendered as two menus, the top menu is typically the filtering menu while the side menu contains the filtered list of links.
---

# About

## Front-Matter

### All

#### Class

The `class` setting gives the class name(s) to apply to the container of the rendered markdown.

### Navigation

#### Layout

The `layout` setting indicates the positioning of the navigation menu. The default is `left` and the acceptable values include

left
: Vertical menu at the left of the page
right
: Vertical menu at the right of the page
top
: Horizontal menu at the top of the page
mega
: Horizontal menu at the top of the page using a mega-menu format

#### Depth

The `depth` setting indicates the number of sub-menus to show. The default is `0`, which means to show only the top level (i.e. - zero sub-menus).