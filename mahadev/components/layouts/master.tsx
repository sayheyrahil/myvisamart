import React from "react";
import Header from "./header";
import Footer from "./footer";

interface MasterPageProps {
    title: string;
    children: React.ReactNode;
}

const MasterPage: React.FC<MasterPageProps> = ({ title, children }) => (
    <div className="bg-[#f4f8fc]11">
        <Header title={title} />

        <div className="w-full max-w-7xl mx-auto">{children}</div>
        <Footer />
    </div>
);

export default MasterPage;
