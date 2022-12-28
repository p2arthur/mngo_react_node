import classNames from "classnames";
function Button({
  children,
  primary,
  secondary,
  inactive,
  sm,
  md,
  lg,
  danger,
  ...rest
}) {
  const faceClassName = classNames(
    "font-bold select-none duration-75 shadow-lg border-4 border-white text-lg cursor-pointer  text-white w-full h-10 text-center mx-auto flex items-center justify-center rounded",
    {
      "bg-purple-400 hover:bg-purple-500 active:bg-purple-600 active:translate-y-1 w-full":
        primary,
      "bg-green-500 hover:bg-green-600 active:border-green-400 active:bg-green-600 active:translate-y-1":
        secondary,
      "bg-gray-400 active:-translate-y-0.5 active:border-red-200 shadow-3xl":
        inactive,
      "bg-red-400 hover:bg-red-500 active:border-red-400 active:bg-red-600 active:translate-y-1":
        danger,
    }
  );

  const sizeClass = classNames({
    "w-full": lg,
    "w-36": md,
    "w-24 text-xs md:w-24 md:text-lg xl:w-36 xl:text-3xl": sm,
  });
  return (
    <div
      className={` bg-purple-900 rounded pb-1 ${sizeClass} ${rest.className}`}
    >
      <button
        {...rest}
        className={`${faceClassName} ${sizeClass} ${rest.className} `}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
