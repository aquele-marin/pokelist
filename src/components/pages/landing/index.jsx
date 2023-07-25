import { MinimalistFooter } from "../../atoms/Sections";
import Album from "./Album";
export default function Landing() {
    return (
        <>
            <Album />
            {/* <MinimalistFooter
                    title="Footer"
                    description="Texto do footer"
                /> */}
            <MinimalistFooter.component>
                <MinimalistFooter.title>Footer</MinimalistFooter.title>
                <MinimalistFooter.description>
                    Texto do footer
                </MinimalistFooter.description>
            </MinimalistFooter.component>
        </>
    );
}
