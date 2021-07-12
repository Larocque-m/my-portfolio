import React from "react"
import image from "../emile-perron-xrVDYZRGdw4-unsplash.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Tech-Space" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold sans-serif leading-none lg:leading-snug home-name">Howdy, I'm Michael</h1>
            </section>
        </main>
    )
}