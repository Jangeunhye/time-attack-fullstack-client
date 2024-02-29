import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  height?: string;
}

function Input({ label, height, ...props }: InputProps) {
  const id = useId().toString();
  return (
    <div className="grid gap-y-1.5 w-full ">
      <label htmlFor={id} className="text-lg font-medium text-gray-800">
        {label}
      </label>
      <input
        id={id}
        className=" font-['Happiness-Sans-Regular'] block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300 data-[height=createInput]:h-10"
        data-height={height}
        {...props}
      />
    </div>
  );
}

export default Input;
