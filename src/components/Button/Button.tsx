import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "white" | "black";
}

function Button({
  color = "white",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="border bg-[#2b1e8e] text-white rounded-lg py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full  mt-3 hover:opacity-80"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
