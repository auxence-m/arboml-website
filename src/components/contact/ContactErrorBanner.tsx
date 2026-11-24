import {CircleAlert, TriangleAlert, XIcon} from "lucide-react";
import {Button} from "@headlessui/react";
import {useState} from "react";

export default function ContactErrorBanner({message}: {message: string}) {
    const [showBanner, setShowBanner] = useState(true);

    function closeBanner() {
        setShowBanner(false);
    }

    if (!showBanner) {
        return null
    }

    return (
        <div className="fixed top-20 inset-x-0 z-50 w-full text-on-error bg-error shadow-md border-b border-error-container">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full flex items-center justify-center text-on-error bg-surface-container-lowest/20 shrink-0">
                        <CircleAlert size={24} className="shrink-0" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <h2 className="font-headline text-xl font-semibold text-on-error tracking-tight">
                            Échec de l&#39;envoi de votre demande
                        </h2>
                        <p className="font-body text-[14px] leading-snug text-on-error/90">
                            {message} {" Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard"} ou nous appeler directement au {" "}
                            <a href="tel:5144428299" className="underline font-semibold hover:text-on-error">
                                (514) 442-8299
                            </a>
                        </p>
                    </div>
                </div>
                <Button type="button" onClick={closeBanner}
                        className="size-10 rounded-full flex items-center justify-center text-on-error hover:bg-surface-container-lowest/20 transition-all cursor-pointer">
                    <span className="sr-only">Fermer</span>
                    <XIcon size={24} className="shrink-0" />
                </Button>
            </div>
        </div>
    );
}