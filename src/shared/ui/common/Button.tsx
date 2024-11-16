import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "../../helpers/cn";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 bg-sky-600 text-white disabled:bg-gray-400 duration-150 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
