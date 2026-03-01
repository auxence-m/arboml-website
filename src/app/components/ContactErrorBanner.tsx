import {TriangleAlert, XIcon} from "lucide-react";
import {Button} from "@headlessui/react";
import {useState} from "react";

export default function ContactErrorBanner() {
    const [showBanner, setShowBanner] = useState(true);

    function closeBanner() {
        setShowBanner(false);
    }

    if (!showBanner) {
        return null
    }

    return (
        <div className="fixed top-16 md:top-20 inset-x-0 z-50 flex justify-center px-4">
            <div className="w-full max-w-md md:max-w-7xl">
                <div className="flex items-center gap-3 rounded-2xl bg-rose-600/90 text-white shadow-xl backdrop-blur-sm p-4">
                    <TriangleAlert strokeWidth={2} size={24} className="shrink-0"/>
                    <p className="text-sm md:text-base font-medium leading-snug">
                        Une erreur s&#39;est produite lors de l&#39;envoi du message. Veuillez
                        réessayer plus tard s&#39;il vous plaît.
                    </p>
                    <Button type="button" onClick={closeBanner} className="ml-auto shrink-0 rounded-md p-1 hover:bg-white/10 transition">
                        <span className="sr-only">Fermer</span>
                        <XIcon strokeWidth={2} size={20} />
                    </Button>
                </div>
            </div>
        </div>
    );
}