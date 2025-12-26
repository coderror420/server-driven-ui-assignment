# Server-Driven UI React Native App

A React Native / Expo project demonstrating a server-driven UI with:

- JSON-defined UI components
- Light/Dark theme support
- Dynamic event handling
- Local and remote images
- Modular, scalable architecture

## Tasks Implemented

### 1. Primary Task: Dynamic UI Renderer
- **Goal:** Create a system to render native components from a JSON list.
- **Implementation:**  
  Built a generic `UIRenderer` component that parses JSON data and maps specific types (`text`, `image`, `button`) to native React Native components using a scalable **Component Registry**.

### 2. Bonus Task 1: Conditional Rendering Logic
- **Goal:** Allow the server to control component appearance based on theme (Light/Dark).
- **Implementation:**  
  Components adapt their colors, styles, and appearance dynamically based on the current theme.  
  The `use-theme` hook tracks the theme state, and `UIRenderer` applies the corresponding JSON (light or dark) to render the components instantly.

### 3. Bonus Task 2: Server-Driven Theming
- **Goal:** Enable the server to dictate the application's visual theme (Modes).
- **Implementation:**  
  The app contains a toggle button which allows theme changes: light or dark.
  A custom `use-theme` hook manages light/dark switching locally.

## Features

### Server-driven UI
- All UI defined in `ui.json` (light) and `ui.darktheme.json` (dark)
- Supports `text`, `image`, and `button` components
- Easily extendable for new components

### Light/Dark Theme
- Controlled via a custom `use-theme` hook
- JSON swaps instantly when theme changes
- Supports local assets and remote images

### Event-driven Actions
- Buttons trigger actions like `toggle_theme`.
- Handled centrally in `Index.tsx`

### Responsive Layout
- Centered content, scrollable on smaller screens
- Uniform spacing and sizing for text, images, and buttons


## Tech Stack

- **Framework:** React Native (Expo)  
- **Language:** TypeScript  
- **Styling:** StyleSheet 
- **Architecture:** Modular, component-based, server-driven

## Project Structure
```
.server-driven-ui/
├── assets/
| |── images/
│ ├── pizza.jpg
│ └── imageRegistry.ts
├── components/
│ ├── UIRenderer.tsx
│ └── ui/
│ ├── TextBlock.tsx
│ ├── ImageBlock.tsx
│ └── ButtonBlock.tsx
├── data/
│ ├── ui.json
│ └── ui.darktheme.json
├── hooks/
│ └── use-theme.ts
├── App.tsx
└── index.tsx
```

### ui.json

```json
{
  "screen": "promo_page",
  "components": [
    {
      "type": "text",
      "value": "Welcome to Pizza Week!",
      "style": {
        "fontSize": 24,
        "fontWeight": "700",
        "marginBottom": 8,
        "color": "#FF5733"
      }
    },
    {
      "type": "image",
      "source": "local",
      "name": "pizza-light"
    },
    {
      "type": "button",
      "text": "Toggle Theme",
      "action": "toggle_theme"
    },
    {
      "type": "button",
      "text": "Order Now",
      "action": "navigate_to_menu"
    }
  ]
}
```
## Getting Started

### 1. Install dependencies

```bash
npm install
```
```bash
npx expo start
```

<img width="639" height="750" alt="image" src="https://github.com/user-attachments/assets/f3cd5bc7-4237-43ae-a859-627579597943" />
<img width="639" height="750" alt="image" src="https://github.com/user-attachments/assets/b064cd6a-af47-4bbb-aa52-f9f636227a77" />
