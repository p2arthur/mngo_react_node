import CardList from "./pages/CardList";
import RafflesPage from "./pages/RafflesPage";
import Router from "./components/Router";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import MyCollection from "./pages/MyCollectionPage";

import CardModalContainer from "./pages/CardModalContainer";
function App() {
  return (
    <div>
      <NavigationBar />
      <div className="mt-14">
        <Router pathName="/frenzone">
          <CardModalContainer>
            <CardList />
          </CardModalContainer>
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
