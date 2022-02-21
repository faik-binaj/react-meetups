import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetups />
        </Route>
        <Route path={"/favorites"}>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
