export function scrollToService(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "instant", block: "start" });
    }
}

export const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Territoires", href: "/territoires" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
];