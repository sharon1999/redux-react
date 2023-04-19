import { useState } from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/a" exact component={ProductListing} />
          <Route path="/product/:productid" exact component={ProductDetail} />
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
