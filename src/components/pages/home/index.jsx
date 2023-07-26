import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Profile from "./Profile";
import Header from "./Header";

export default function Home() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}
