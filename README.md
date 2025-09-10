<!-- markdownlint-disable -->
<div align="center">
<p align="center"><em>The UI Framework for Perfectionists </em></p>

 <a href="https://github.com/chainlift/liftkit">
    <img src="https://cdn.prod.website-files.com/657f62adb6ceeafe578853be/68748d8bdb8b734290a3db92_h-lockup-transparent.svg" height="60em" alt="chainlift-liftkit">
  </a>

<h1 align="center">🎢 </h1> 
<p align="center"><a href="https://www.chainlift.io/liftkit/install">Install</a> • <a href="https://www.chainlift.io/liftkit/get-started">Documentation</a></p>
<p align="center"><a href="https://www.figma.com/community/file/1404856652359938563">Figma</a> • <a href="https://webflow.com/made-in-webflow/website/liftkit">Webflow Template</a></p>
</div>

> This is a community project. It is not officially supported by Chainlift. 
 However, this may change in the future. To get notified about official updates, sign up at [chainlift.io/liftkit](chainlift.io/liftkit). 

## Features

```html
<div class="mt-md bg-primary text-onprimary"> Liftkit </div>

<div class="mt-4 bg-amber-900 text-black"> Tailwind v4 </div>
```

* Full Tailwind v4 support

* Golden ratio spacing utilities (`mt-md`, `p-lg`, etc.)
* Dynamic color utilities (`bg-primary`, `text-onprimary`, etc.)
* Custom LiftKit utility classes alongside standard Tailwind
* Dynamic color system powered by Material 3
* Seamless integration with existing projects



<br>

## What is LiftKit?
LiftKit is a UI framework based on the golden ratio. 
at the core, set of formulas provide golden values with material 3 color system.

It fully supports **Tailwind v4** plus LiftKit's custom utility classes and
remains fully backward-compatible.

<br>

## Tailwind v4 Integration

### Prerequisites
 Next.js project with LiftKit installed.

### Step 1: Install Tailwind v4
Follow the official guide: [Tailwind v4 Next.js Installation](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

### Step 2: Update Your globals.css
1. Go to [globals.css](https://github.com/jellydeck/liftkit-tailwind/blob/main/examples/globals.css) and copy the entire file
2. Replace your existing `globals.css` with the copied content
3. Update below path with liftkit's `index.css`:

```css
@layer lk-base {
   @import "../lib/css/index.css";  /* IMPORTANT : update this path with LiftKit's index css file */
}
```

That's it! Now you can use tailwind v4 + liftkit utility classes.


## How It Works

The CSS layer structure ensures proper precedence:
- **theme**: Tailwind's CSS custom properties and design tokens
- **lk-base**: LiftKit's core styles and Tailwind's preflight/reset  
- **components**: Component-specific styles
- **utilities**: Utility classes (highest precedence)

This setup allows you to use both standard Tailwind utilities and LiftKit's golden ratio utilities together:

```html
<div class="mt-md bg-primary text-onprimary"> Liftkit </div>

<div class="mt-4 bg-amber-900 text-black"> Tailwind v4 </div>
```

The utilities layer has the highest precedence, allowing Tailwind utilities to override LiftKit base styles when needed, while still preserving LiftKit's golden ratio system and Material 3 colors.

<br>

## Utility Classes

Use both standard Tailwind utilities and custom golden ratio utilities:

### Tailwind v4
```html
<div class="mt-4 w-40 bg-amber-900 rounded-lg">
  Standard Tailwind styling
</div>
```

### LiftKit Golden Ratio Classes
```html
<div class="mt-md p-lg bg-primary text-onprimary">
  Golden ratio spacing with dynamic colors
</div>
```

### Available LiftKit Utilities

**Spacing (Golden Ratio Based):**
- `m-xs`, `m-sm`, `m-md`, `m-lg`, `m-xl`
- `p-xs`, `p-sm`, `p-md`, `p-lg`, `p-xl`
- `mt-md`, `mb-lg`, `ml-sm`, etc.

**Dynamic Colors (Material 3):**
- `bg-primary`, `bg-secondary`, `bg-tertiary`
- `text-onprimary`, `text-onsecondary`
- `border-outline`, `bg-surface`

The CSS layer structure ensures proper precedence:
```css
/* Left to right, right has most power */
@layer theme, lk-base, lk, utilities;
```

<br>

## Configuration
Configuration is done through the `components.json` file and optional `tailwind.config.ts`. The system is designed to work seamlessly whether you use Tailwind or not.

<details>
<summary><strong>Preview example configuration</strong></summary>
<br>

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

</details>

<br>

## Common Issues
<details>
<summary><strong>React 19 compatibility warnings</strong></summary>

If you see warnings about React 19 compatibility when installing components, add `--force` to your install command:

```bash
npm run add button --force
```

This is a known issue with the current registry system and doesn't affect functionality.
</details>

<details>
<summary><strong>Why did it install CSS for components I'm not using?</strong></summary>

This is by design to let you experiment freely with different components. Unused styles are automatically removed at build time through tree-shaking.
</details>

<details>
<summary><strong>Tailwind classes not working with LiftKit</strong></summary>

Ensure your CSS layer structure is correct in `globals.css`. The `utilities` layer should come last to have proper precedence over LiftKit base styles.
</details>

<br>

## FAQ
<details>
<summary><strong>Do I need Tailwind CSS to use LiftKit?</strong></summary>
No—LiftKit works independently. However, Tailwind v4 integration provides additional utility classes for enhanced flexibility.
</details>

<details>
<summary><strong>Can I use LiftKit with other CSS frameworks?</strong></summary>
Yes, LiftKit is designed to be framework-agnostic, though it works best with modern CSS-in-JS solutions and PostCSS.
</details>

<details>
<summary><strong>How does the golden ratio improve my UI?</strong></summary>
The golden ratio (1.618) creates naturally pleasing proportions. LiftKit applies this mathematically to spacing, sizing, and color relationships for more harmonious interfaces.
</details>

<details>
<summary><strong>What's the difference between LiftKit utilities and Tailwind utilities?</strong></summary>
LiftKit utilities are based on the golden ratio and Material 3 design principles, while Tailwind utilities use standard linear scales. You can use both together.
</details>

<br>

## Contributing

Currently repo is maintained by me. 

We welcome contributions to LiftKit! Here are some guidelines:

* Submit feature requests before implementing major changes
* Use the `dev` branch for new features and bug fixes
* Maintain compatibility with existing utility classes
* Follow the golden ratio principles in new components
* Provide screenshots for UI-related changes
* Keep bundle size minimal - avoid unnecessary dependencies

<br>

## Building from Source

<details>
<summary><strong>Development Setup</strong></summary>
<br>

Requirements: Node.js >= 16, npm

```bash
# Clone the repository
git clone https://github.com/jellydeck/liftkit-tailwind
cd liftkit-tailwind

# Install dependencies
npm install

# Build the project
npm run build

# Run development server
npm run dev
```

<hr>
</details>

<br>

## Thank you

[Garett Mack](https://github.com/garrett-from-chainlift)

[Liftkit Team](https://github.com/Chainlift/liftkit)
