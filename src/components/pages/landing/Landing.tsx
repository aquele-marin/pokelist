import { Footer } from "../../atoms/Sections";
import Album from "./Album";
export function Landing() {
    return (
        <>
            <Album />
            <Footer />
            {/*
            Component design pattern example
            <MinimalistFooter.component>
                <MinimalistFooter.title>Footer</MinimalistFooter.title>
                <MinimalistFooter.description>
                    Texto do footer
                </MinimalistFooter.description>
            </MinimalistFooter.component> */}
        </>
    );
}
