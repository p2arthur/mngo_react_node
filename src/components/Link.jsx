import UseNavigationContext from "../hooks/use-navigation-context";

function Link({ to, children, className }) {
  const { navigate } = UseNavigationContext();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(to);
    navigate(to);
  };

  return (
    <a
      className={`${className} cursor-pointer`}
      onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  );
}
export default Link;
