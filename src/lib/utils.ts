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
] as const;

export const services = [
    {name: "abattage", value: "Abattage d'arbres" },
    {name: "elagage", value: "Élagage de précision"},
    {name: "taille", value: "Taille esthétique"},
    {name: "haubanage", value: "Haubanage dynamique"},
    {name: "plantation", value: "Plantation stratégique"},
    {name: "diagnostic", value: "Diagnostic arboricole"},
    {name: "autre", value: "Autre demande / Question générale"},
] as const;