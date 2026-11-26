export function scrollToService(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "instant", block: "start" });
    }
}

export const navigationItems = [
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

const montrealTime = new Intl.DateTimeFormat("fr-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
});

export type ContactFormState = {
    formError?: string;
    errors?: {
        fullName?: string[];
        email?: string[];
        phoneNumber?: string[];
        municipality?: string[];
        services?: string[];
        description?: string[];
        consent?: string[];
    };
};

export function readContactFormFields(formData: FormData) {
    return {
        fullName: formData.get("fullName") ?? "",
        email: formData.get("email") ?? "",
        phoneNumber: formData.get("phoneNumber") ?? "",
        municipality: formData.get("municipality")?? "",
        services: formData.getAll("services").sort(),
        description: formData.get("description") ?? "",
        consent: formData.get("consent") ?? "",
        submittedAt: formData.get("submittedAt"),
    };
}

export function formatPhoneNumber(phone: string): {display: string, dial: string} {
    const digits = phone.replace(/\D/g, "");
    const match = digits.match(/^1?(\d{3})(\d{3})(\d{4})$/);

    if (!match) {
        throw new Error("Expected a 10-digit phone number with an optional +1 prefix.");
    }

    const [, area, exchange, line] = match;

    return {
        display: `(${area}) ${exchange}-${line}`, // CLIENT_PHONE
        dial: `+1${area}${exchange}${line}`,      // PHONE_DIAL
    };
}

export function formatSubmittedAt(date: Date): string {
    const parts = Object.fromEntries(
        montrealTime.formatToParts(date).map(({ type, value }) => [type, value])
    );

    return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} ${parts.timeZoneName}`;
}

export function formatServices(services: readonly string[]): string {
    if (services.length < 2) return services.join("");

    const lastService = services[services.length - 1];
    return `${services.slice(0, -1).join(", ")} & ${lastService}`;
}

export function splitFullName(fullName: string): {firstName: string, lastName: string} {
    const [firstName = "", ...rest] = fullName.trim().split(/\s+/);
    return { firstName, lastName: rest.join(" ") };
}