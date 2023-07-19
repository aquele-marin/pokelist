import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";
import Profile from "./Profile";
import Header from "./Header";

export default function Home() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Header />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
