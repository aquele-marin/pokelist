import { Footer } from "../../atoms/Sections";
import { MinimalistFooter } from "../../atoms/Sections/MinimalistFooter";
import Album from "./Album";
export default function Landing() {
    return (
        <>
            <Album />
            <Footer>
                <MinimalistFooter
                    title="Footer"
                    description="Texto do footer"
                />
            </Footer>
        </>
    );
}
