import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Profile from "./Profile";
import { Footer, Header } from "../../atoms/Sections";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Box from "@mui/material/Box";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
}); // 12 hours of cached data

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <Box className="bg-gray-700 h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </Box>
        </QueryClientProvider>
    );
}
