import { cva } from 'class-variance-authority';

const spinnerVariants = cva('animate-spin', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      destructive: 'text-destructive',
      muted: 'text-muted',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

export { spinnerVariants };
