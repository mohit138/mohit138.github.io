import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function MyDuck() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <section
            id="my-duck"
            className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            <motion.img
                src="/duck_pixel_bw.png" // Replace with your actual duck image URL
                alt="Meet My Duck"
                className="w-64 h-64"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 5 }}
            />
            <br />
            <div>
            <h1 className="text-white text-2xl">My "Debugging" Rubber Duck</h1>
            <br/>
            <h2 className="text-white">It Listens, It Questions, It Agrees, It Debugs</h2>
            </div>
            <h2 className="text-white text-xl">It Quacks!</h2>
        </section>
    );
}