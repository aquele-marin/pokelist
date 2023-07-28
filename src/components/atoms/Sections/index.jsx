import {
    MinimalistFooterComponent,
    MFCTitle,
    MFCDescription,
} from "./MinimalistFooter";
import {
    HeroSectionComponent,
    HeroSectionTitle,
    HeroSectionDescription,
    HeroSectionButtons,
} from "./HeroSection";

export { Header } from "./Header";
export { Footer } from "./Footer";

export const MinimalistFooter = {
    Component: MinimalistFooterComponent,
    Title: MFCTitle,
    Description: MFCDescription,
};

export const HeroSection = {
    Component: HeroSectionComponent,
    Title: HeroSectionTitle,
    Description: HeroSectionDescription,
    Buttons: HeroSectionButtons,
};
