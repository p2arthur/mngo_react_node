import FrenZonePage from "./pages/FrenZonePage";
import RafflesPage from "./pages/RafflesPage";
import Router from "./components/Router";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import MyCollection from "./pages/MyCollectionPage";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="mt-14">
        <Router pathName="/frenzone">
          <FrenZonePage />
        </Router>

        <Router pathName="/raffles">
          <RafflesPage />
        </Router>
        <Router pathName="/">
          <HomePage />
        </Router>
        <Router pathName="/mycollection">
          <MyCollection />
        </Router>
      </div>
    </div>
  );
}

export default App;
