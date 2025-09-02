import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import { spinnerVariants } from './spinner.variants';

type SpinnerProps = React.ComponentProps<'svg'> &
  VariantProps<typeof spinnerVariants>;

const Spinner = ({ className, size, variant, ...props }: SpinnerProps) => {
  return (
    <Loader2Icon
      className={cn(spinnerVariants({ size, variant, className }))}
      {...props}
    />
  );
};

export { Spinner };
export type { SpinnerProps };
