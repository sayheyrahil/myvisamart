"use client";
import React from "react";
import Home from "../home/page";

export default function CountryPage({ params }: any) {
    // Use React.use() to unwrap params if it's a promise (Next.js App Router requirement)
    const { country } = React.use(params);

    return (
        <Home />
    );
}
