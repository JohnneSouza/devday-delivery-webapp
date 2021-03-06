import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Products from "./Products";
import Purchase from "./Purchase";

function Routes() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/orders">
					<Orders />
				</Route>
				<Route path="/purchase">
					<Purchase />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;