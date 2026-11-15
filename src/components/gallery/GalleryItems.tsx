"use client";

import {useRef, useState, KeyboardEvent} from "react";
import Image from "next/image";
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import {ChevronLeft, ChevronRight, Images, Maximize, Play, Video, XIcon} from "lucide-react";

type GalleryItem = {
    id: string;
    alt: string;
    width: number;
    height: number;
} & ({ type: "image"; src: string } | { type: "video"; src: string; poster: string });

// Demo media: replace these URLs, descriptions and dimensions with your work.
// Allow services.unsplash.com in next.config.ts (services.remotePatterns).
const galleryItems: GalleryItem[] = [
    {
        id: "img-1",
        type: "image",
        alt: "Élagage d’un arbre dans une cour résidentielle à Varennes",
        src: "/galerie/IMG_1951.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-2",
        type: "image",
        alt: "Taille manuelle des branches d'un arbres dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6080.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-3",
        type: "image",
        alt: "Arboriste attaché de facon sécuritaire dans un arbre d'une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6092.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "vid-1",
        type: "video",
        alt: "Aperçu d'un abattage par section d'un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6206.MP4",
        poster: "/galerie/IMG_6206_still.JPEG",
        width: 1586,
        height: 1982
    },
    {
        id: "img-4",
        type: "image",
        alt: "Abattage par section d’un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6186.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-5",
        type: "image",
        alt: "Abattage du tronc d’un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6215.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-6",
        type: "image",
        alt: "Abattage par section d’un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6239.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "vid-2",
        type: "video",
        alt: "Aperçu de l'abattage du tronc d'un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6210.MP4",
        poster: "/galerie/IMG_6210_still.JPEG",
        width: 1586,
        height: 1982
    },
    {
        id: "img-7",
        type: "image",
        alt: "Déchiquetage des branches d'un frêne apres abattage dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6286.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-8",
        type: "image",
        alt: "Nettoyage apres abattage dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6254.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-9",
        type: "image",
        alt: "Élagage d’un érable jaune dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6276.JPEG",
        width: 1982,
        height: 1586
    },

    {
        id: "img-10",
        type: "image",
        alt: "Élagage d’un érable rouge dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6278.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "img-11",
        type: "image",
        alt: "Abattage par section d’un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6281.JPEG",
        width: 1982,
        height: 1586
    },
    {
        id: "vid-3",
        type: "video",
        alt: "Aperçu d'un abattage par section d'un frêne dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6198.MP4",
        poster: "/galerie/IMG_6198_still.JPEG",
        width: 1586,
        height: 1982
    },
    {
        id: "img-12",
        type: "image",
        alt: "Reste plat du tronc d'un frêne et terrain propre apres abattage dans une cour résidentielle à Boucherville",
        src: "/galerie/IMG_6289.JPEG",
        width: 1982,
        height: 1586
    },
];

export default function GalleryItems() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const activeItem = galleryItems[activeIndex];

    function closeGallery() {
        videoRef.current?.pause();
        setIsOpen(false);
    }

    function navigate(direction: number) {
        videoRef.current?.pause();
        setActiveIndex((index) => (index + direction + galleryItems.length) % galleryItems.length);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        // Leave the native video player's seeking/volume keyboard controls intact.
        if (event.target instanceof HTMLVideoElement) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
        }
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }

    return (
        <div className="w-full bg-surface py-16 lg:py-24">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-2 inline-flex items-center gap-2 text-xs font-headline font-bold tracking-widest text-secondary uppercase">
                        <Images size={16} aria-hidden="true" className="shrink-0"/>
                        <span>Réalisations techniques en images</span>
                    </div>
                    <h2 className="mb-4 font-headline text-3xl lg:text-4xl uppercase leading-tight font-semibold tracking-tight text-primary">
                        Un aperçu de notre savoir-faire et de nox travaux sur le terrain
                    </h2>
                    <p className="text-lg font-body leading-relaxed text-on-surface-variant">
                        Cliquez sur une image ou une vidéo pour l&#39;afficher en plein écran
                    </p>
                </div>

                <div className="gap-3 space-y-3 columns-1  md:columns-2 lg:columns-3">
                    {galleryItems.map((item, index) => (
                        <button key={item.id} type="button" onClick={() => {setActiveIndex(index); setIsOpen(true)}} className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden bg-surface-container-highest text-left shadow-sm">
                            <Image src={item.type === "video" ? item.poster : item.src}
                                   alt={item.alt}
                                   width={item.width}
                                   height={item.height}
                                   sizes="(min-width: 80rem) 24.833rem,
                                       (min-width: 64rem) calc((100vw - 5.5rem) / 3),
                                       (min-width: 48rem) calc((100vw - 3.75rem) / 2),
                                       (min-width: 40rem) calc(100vw - 3rem),
                                       calc(100vw - 2rem)"
                                   className="h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                            />
                            {
                                item.type === "video" ? (
                                    <div>
                                        <span className="absolute inset-0 flex items-center justify-center bg-primary/25 transition-colors duration-300 group-hover:bg-primary/40">
                                            <span className="flex size-14 items-center justify-center rounded-full bg-surface/90 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                                                <Play size={24} aria-hidden="true" className="ml-0.5 shrink-0 text-secondary"/>
                                            </span>
                                        </span>
                                        <span className="absolute left-3 top-3 flex items-center gap-1 bg-primary/80 px-2 py-0.5 text-xs font-semibold font-headline uppercase tracking-wider text-secondary-fixed backdrop-blur-sm">
                                            <Video aria-hidden="true" className="size-3.5"/> Vidéo
                                        </span>
                                    </div>
                                ) : (
                                    <span className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="flex size-12 items-center justify-center bg-surface/90 text-primary shadow-md backdrop-blur-sm">
                                            <Maximize aria-hidden="true" className="size-6"/>
                                        </span>
                                    </span>
                                )
                            }
                        </button>
                    ))}
                </div>
            </section>

            <Dialog open={isOpen} onClose={closeGallery} onKeyDown={handleKeyDown} className="relative z-100 font-headline">
                <DialogBackdrop transition className="fixed inset-0 bg-primary/95 backdrop-blur-lg transition-opacity duration-300 data-closed:opacity-0"/>
                <div className="fixed inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <DialogPanel transition className="relative w-full max-w-7xl text-on-primary transition-opacity duration-300 data-closed:opacity-0">
                        <div className="mb-3 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <span aria-hidden="true" className="size-2 rounded-full bg-secondary-fixed"/>
                                <span aria-live="polite" aria-atomic="true"
                                      className="text-sm font-semibold tracking-wider text-secondary-fixed">{activeIndex + 1} / {galleryItems.length}
                                </span>
                            </div>
                            <button type="button" data-autofocus onClick={closeGallery} className="flex size-10 cursor-pointer items-center justify-center transition-colors duration-300 hover:bg-surface-container-highest/20">
                                <XIcon size={26} aria-hidden="true" className="shrink-0"/>
                            </button>
                        </div>
                        <div className="relative flex h-[60dvh] lg:h-[75dvh] items-center justify-center">
                            {activeItem.type === "video" ? (
                                <video key={activeItem.id}
                                       ref={videoRef}
                                       src={activeItem.src}
                                       poster={activeItem.poster}
                                       controls
                                       playsInline
                                       preload="none"
                                       className="max-h-full w-full bg-black object-contain shadow-2xl"
                                />
                            ) : (
                                <Image key={activeItem.id}
                                       src={activeItem.src}
                                       alt={activeItem.alt}
                                       fill
                                       sizes="(min-width: 84rem) 80rem,
                                           (min-width: 64rem) calc(100vw - 4rem),
                                           (min-width: 40rem) calc(100vw - 3rem),
                                           calc(100vw - 2rem)"
                                       className="object-contain"
                                />
                            )}
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3">
                            <button type="button" onClick={() => navigate(-1)} className="flex size-12 shrink-0 cursor-pointer items-center justify-center bg-primary-container/80 shadow-lg transition-colors duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed">
                                <ChevronLeft size={26} aria-hidden="true" className="shrink-0"/>
                            </button>
                            <button type="button" onClick={() => navigate(1)} className="flex size-12 shrink-0 cursor-pointer items-center justify-center bg-primary-container/80 shadow-lg transition-colors duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed">
                                <ChevronRight size={26} aria-hidden="true" className="shrink-0"/>
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
}
