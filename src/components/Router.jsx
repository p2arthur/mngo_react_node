import UseNavigationContext from "../hooks/use-navigation-context";

function Router({ children, pathName }) {
  const { currentPath } = UseNavigationContext();

  if (currentPath === pathName) return <div>{children}</div>;
}

export default Router;
