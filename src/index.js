import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';


import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Auth0Provider
  domain="dev-ew2yri0cdd2v2r4i.us.auth0.com"
  clientId="7qc1VHZVIJHKwR5R1hKBOHJPlvN9vsik"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
><App/>
</Auth0Provider>
);