export function scrollToService(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "instant", block: "start" });
    }
}