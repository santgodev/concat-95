
# Sparkles Animation Component

This directory contains a particle animation component with various customization options for creating beautiful visual effects.

## Required Dependencies

To fully implement this component, you need to install the following dependencies:

```bash
npm install @tsparticles/react @tsparticles/slim framer-motion
```

## Usage

The `SparklesCore` component supports the following props:

- `id`: Unique identifier for the component (optional)
- `className`: Additional CSS classes
- `background`: Background color (default: transparent)
- `particleSize`: Size of particles 
- `minSize`: Minimum particle size (default: 1)
- `maxSize`: Maximum particle size (default: 3)
- `speed`: Animation speed (default: 4)
- `particleColor`: Color of particles (default: white)
- `particleDensity`: Density of particles (default: 120)

## Example Usage

```jsx
import { SparklesCore } from "@/components/ui/sparkles";

function MyComponent() {
  return (
    <div className="h-[400px] w-full relative">
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
        speed={1}
      />
    </div>
  );
}
```

## Demo Components

Three demo components are included in `sparkles-preview.tsx`:

1. `SparklesPreview`: Standard demo with text and gradient effects
2. `SparklesPreviewDark`: Full page background demo
3. `SparklesPreviewColorful`: Colorful variant with green particles

## Integration with Index Page

The components are showcased on the Index page with a toggle to switch between demos.

## Current Status

**Note**: Currently, the component is using a placeholder implementation. To use the full functionality of the component, please install the required dependencies listed above.
