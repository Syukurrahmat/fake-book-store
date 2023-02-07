import React from "react"
import Navbar from "./navbar"
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar"
import { useRef } from "react"
import { Router } from "next/router"
import Footer from "./footer"

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
    const ref = useRef<LoadingBarRef>(null)

    Router.events.on("routeChangeStart", () => ref.current?.continuousStart())
    Router.events.on("routeChangeComplete", () => ref.current?.complete())
    Router.events.on("routeChangeError", () => ref.current?.complete())

    return (
        <>
            <LoadingBar color='#f11946' ref={ref} />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}