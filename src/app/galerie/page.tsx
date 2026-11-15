import {Metadata} from "next";
import GalleryItems from "@/components/gallery/GalleryItems";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export const metadata: Metadata = {
    title: "",
    description: "",
    alternates: {
        canonical: "https://www.arboml.ca/galerie",
    }
};

export default function Galerie() {
    return (
        <div>
            <GalleryHero />
            <GalleryItems />
            <GalleryCTA />
        </div>
    )
}