import React from "react";
import { Outlet } from "react-router-dom";
import Header from './static/Header'
import Footer from './static/footer'
export default function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}