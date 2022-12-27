import UseNavigationContext from "../hooks/use-navigation-context";

function Link({ to, children, className }) {
  const { navigate, currentPath } = UseNavigationContext();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(to);
    navigate(to);
  };

  return (
    <a
      className={`${className} cursor-pointer ${
        currentPath === to ? "border-b border-b-black " : null
      }`}
      onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  );
}
export default Link;
