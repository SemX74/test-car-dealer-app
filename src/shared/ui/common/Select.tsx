import { cn } from "@/shared/helpers/cn";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Select = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithoutRef<"select">
>(({ className, children, ...props }, ref) => {
  return (
    <select
      {...props}
      ref={ref}
      className={cn(
        "border border-sky-300 text-slate-900 font-bold text-xs rounded px-5 py-2 w-full",
        className
      )}
    >
      {children}
    </select>
  );
});
Select.displayName = "Select";
export default Select;
