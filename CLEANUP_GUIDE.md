# Cleanup Guide - Old Files to Remove

After the restructuring, the following old files can be safely deleted as they've been replaced by the new organized structure:

## Files to Delete (Safe to Remove)

### In `src/components/`:

- `Hamburger.jsx` → Moved to `src/components/Navigation/Hamburger.jsx`
- `Hamburger.css` → Moved to `src/components/Navigation/Hamburger.css`
- `NavLinks.jsx` → Moved to `src/components/Navigation/NavLinks.jsx`
- `NavLinks.css` → Moved to `src/components/Navigation/NavLinks.css`
- `Settings.jsx` → Moved to `src/components/Navigation/Settings.jsx`
- `Settings.css` → Moved to `src/components/Navigation/Settings.css`
- `Home.jsx` → Moved to `src/pages/HomePage.jsx`
- `Home.css` → Moved to `src/pages/styles/Home.css`

## How to Clean Up (Windows PowerShell)

Run these commands from `src/components/`:

```powershell
# Remove old navigation component files
Remove-Item Hamburger.jsx
Remove-Item Hamburger.css
Remove-Item NavLinks.jsx
Remove-Item NavLinks.css
Remove-Item Settings.jsx
Remove-Item Settings.css

# Remove old Home files
Remove-Item Home.jsx
Remove-Item Home.css
```

Or simply delete them manually in VS Code File Explorer by:

1. Right-click on each file in `src/components/`
2. Click "Delete" or press Delete key
3. Confirm deletion

## What to Keep

✅ All new structure files in:

- `src/components/Navigation/`
- `src/components/Layout/`
- `src/pages/`
- `src/context/`
- `src/hooks/`
- `src/utils/`

## Verify Everything Works

After cleanup, run:

```powershell
npm run dev
```

The app should work exactly as before, but with better organization! ✨

## Optional: Clean Import Statements

After deleting old files, you can optionally simplify imports in your code if needed. Most imports have already been updated, but you can also use the barrel exports:

```jsx
// Instead of:
import { useTheme } from "../hooks/useTheme";

// Use:
import { useTheme } from "../hooks";
```
