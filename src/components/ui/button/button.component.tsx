import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { Spinner } from '../spinner';
import { buttonVariants } from './button.variants';

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      role='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {isLoading && (
        <Spinner
          role='status'
          className='text-inherit'
        />
      )}
    </Comp>
  );
};

export { Button };
export type { ButtonProps };
