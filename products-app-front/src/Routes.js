import React from "react";
import  { Switch, Route } from 'react-router-dom';
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component= {Products} />
    <Route exact path="/new" component= {ProductForm} />
    <Route exact path="/login" component= {() => <h1>Login</h1>}/>
    <Route exact path="/signup" component= {( <h1>Signup</h1>)}/>
    <Route exact path="/:id" component= {() => <h1>Detail</h1>} />
  </Switch>
)

export default Routes