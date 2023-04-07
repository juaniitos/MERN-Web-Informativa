import React from "react";
import Slides from "../components/Slides";
import Servicios from "../components/offering/Servicios";
import Productos from "../components/offering/Productos";
import Proyectos from "../components/offering/Proyectos";

const Home = () => {
    return (
        <section>
            <Slides></Slides>
            <Servicios></Servicios>
            <Productos></Productos>
            <Proyectos></Proyectos>
        </section>
    )
}

export default Home;