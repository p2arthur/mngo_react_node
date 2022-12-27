import classNames from "classnames";
function Button({ children, primary, secondary, inactive, sm, md, lg }) {
  const faceClassName = classNames(
    "font-bold select-none duration-75 shadow-lg border-4 border-white text-lg cursor-pointer  text-white w-full h-10 text-center mx-auto flex items-center justify-center rounded",
    {
      "bg-purple-400 hover:bg-purple-500 active:bg-purple-600 active:translate-y-1 w-full":
        primary,
      "bg-green-400 hover:bg-green-500 active:border-green-400 active:bg-green-600 active:translate-y-1":
        secondary,
      "bg-gray-400 active:-translate-y-0.5 active:border-red-200": inactive,
    }
  );

  const sizeClass = classNames({ "w-full": lg });

  console.log(sizeClass);
  return (
    <div>
      <div className={`bg-purple-900 rounded pb-1 my-3`}>
        <div className={`${faceClassName} ${sizeClass}`}>{children}</div>
      </div>
    </div>
  );
}

export default Button;
