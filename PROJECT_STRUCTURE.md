# Portfolio Project Structure

## Organized React Project Architecture

This project has been restructured to follow standard React patterns and best practices.

### Folder Structure

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Hamburger.jsx         # Mobile menu toggle button
│   │   ├── Hamburger.css
│   │   ├── NavLinks.jsx          # Navigation links with routing
│   │   ├── NavLinks.css
│   │   ├── Settings.jsx          # Theme and color settings
│   │   ├── Settings.css
│   │   └── index.js              # Barrel export for Navigation components
│   │
│   └── Layout/
│       ├── Layout.jsx            # Main layout wrapper
│       ├── Layout.css
│       └── index.js              # Barrel export for Layout
│
├── pages/
│   ├── HomePage.jsx              # Home page component
│   ├── AboutPage.jsx             # About page component (placeholder)
│   ├── ProjectsPage.jsx          # Projects page component (placeholder)
│   ├── ContactPage.jsx           # Contact page component (placeholder)
│   ├── styles/
│   │   ├── Home.css              # Home page styles
│   │   ├── About.css             # About page styles
│   │   ├── Projects.css          # Projects page styles
│   │   └── Contact.css           # Contact page styles
│   └── index.js                  # Barrel export for pages
│
├── context/
│   ├── ThemeContext.jsx          # Global theme/color state management
│   └── index.js                  # Barrel export for context
│
├── hooks/
│   ├── useTheme.js               # Custom hook for using theme context
│   └── index.js                  # Barrel export for hooks
│
├── utils/                        # Utility functions (for future use)
├── images/                       # Image assets
├── App.jsx                       # Main app component with routing
├── App.css                       # Global styles
└── main.jsx                      # Entry point
```

## Key Improvements

### 1. **State Management with Context API**

- Centralized theme state using `ThemeContext`
- Eliminates prop drilling
- Easy to access theme/color from any component using the `useTheme` hook

### 2. **Component Organization**

- **Navigation Components**: Grouped together in `Navigation/` folder
  - Hamburger, NavLinks, Settings
  - Focused on navigation/header functionality
- **Layout Component**: Manages main layout structure
- **Page Components**: Each page has its own component in `pages/` folder
  - HomePage (existing content)
  - AboutPage (new, ready to be filled)
  - ProjectsPage (new, ready to be filled)
  - ContactPage (new, ready to be filled)

### 3. **Custom Hooks**

- `useTheme()`: Provides access to theme context
- Can be used in any component to get/set theme, colors, and nav state

### 4. **Routing Setup**

- React Router configured in App.jsx
- Routes for Home, About, Projects, and Contact pages
- NavLinks component handles navigation

### 5. **Barrel Exports**

- Each folder has an `index.js` for cleaner imports
- Example: `import { useTheme } from './hooks'` instead of `import { useTheme } from './hooks/useTheme'`

## Usage

### Using the Theme Hook in Components

```jsx
import { useTheme } from "../hooks";

export function MyComponent() {
  const { themColor, openTheme, setThemeColor } = useTheme();

  return (
    <div className={`theme-color-${themColor}`}>
      {/* Your component content */}
    </div>
  );
}
```

### Adding New Pages

1. Create a new component in `src/pages/` (e.g., `NewPage.jsx`)
2. Add corresponding styles in `src/pages/styles/NewPage.css`
3. Import and add route in `App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add navigation link in `NavLinks.jsx`

### Adding New Components

1. Create a new folder in `src/components/` (e.g., `src/components/Hero/`)
2. Add component files and styles
3. Create `index.js` for barrel export
4. Import where needed

## Migration Notes

- Old component files (`src/components/Home.jsx`, etc.) can be removed
- CSS files are now organized by feature/page
- All existing functionality is maintained
- No breaking changes to your code logic

## Next Steps

1. Fill in the AboutPage, ProjectsPage, and ContactPage with your content
2. Add more components as needed following the established patterns
3. Consider adding utilities folder for helper functions
4. Add types/interfaces if using TypeScript in the future
