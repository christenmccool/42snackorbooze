import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import NewItemForm from './NewItemForm';
import NotFound404 from './NotFound404';
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  /* Get snack list from SnackOrBooze API on load and when snacks state updates */
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getItems('snacks');
      setSnacks(snacks);

      setIsLoading(false);
    }
    getSnacks();
  }, [snacks]);

  /* Get drink list from SnackOrBooze API on load and when drinks state updates */
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getItems('drinks');
      setDrinks(drinks);

      setIsLoading(false);
    }
    getDrinks();
  }, [drinks]);

  /* Add new drink or snack to the database by posting to the SnackOrBooze API 
     Update snacks or drinks state
     Passed to NewItemForm component 
  */
  const addItem = async (type, item) => {
    if (type==='snacks') setSnacks([...snacks, item]);
    if (type==='drinks') setDrinks([...drinks, item]);
    await SnackOrBoozeApi.postItem(type, item);
  }

  // Show "Loading" until API call is complete
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
          </Route>

          <Route exact path="/snacks">
            <Menu items={snacks} type="snacks" title="Snack Menu" description="A variety of delicious snacks" />
          </Route>
          <Route exact path="/snacks/add">
            <NewItemForm type="snacks" addItem={addItem} />
          </Route>
          <Route path="/snacks/:id">
            <Item items={snacks} cantFind="/snacks" />
          </Route>

          <Route exact path="/drinks">
            <Menu items={drinks} type="drinks" title="Drink Menu" description="A variety of refreshing drinks" />
          </Route>
          <Route exact path="/drinks/add">
            <NewItemForm type="drinks" addItem={addItem} />
          </Route>
          <Route path="/drinks/:id">
            <Item items={drinks} cantFind="/drinks" />
          </Route>
          
          <Route path="/404">
            <NotFound404 />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
