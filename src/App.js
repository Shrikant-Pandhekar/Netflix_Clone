import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTE from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  // console.log(user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTE.BROWSE}
          path={ROUTE.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTE.BROWSE}
          path={ROUTE.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTE.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTE.BROWSE}
          path={ROUTE.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
