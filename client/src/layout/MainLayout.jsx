import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <section id="main-layout">
            <Nav click={handleClick} />
            <Sidebar open={open} setOpen={setOpen} />
            <Content />
            <Footer />
        </section>
    );
}

export default MainLayout;
