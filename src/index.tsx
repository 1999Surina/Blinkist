import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<Auth0Provider
		domain="dev-ofvd0h8p.us.auth0.com"
		clientId="C4b5GZNXtRCts1ZONn96zY0KA32RWWgD"

		redirectUri={window.location.origin}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
