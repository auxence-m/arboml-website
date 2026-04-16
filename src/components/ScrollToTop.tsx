"use client"

import {useEffect, useState} from "react";
import {Button} from "@headlessui/react";
import {ChevronUp} from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!visible) {
        return null
    }

    return (
        <Button onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 size-10 flex items-center justify-center rounded-full
                bg-green-300 text-gray-900 shadow-lg cursor-pointer hover:ring-4 hover:ring-green-200
                hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <ChevronUp strokeWidth={2} size={20} />
        </Button>
    );
}