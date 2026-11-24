export default function GalleryHero() {
    return (
        <section className="relative w-full bg-surface-container-low pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-surface-container-high text-primary-container mb-4">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"/>
                    <span className="font-headline text-[11px] uppercase tracking-widest font-bold">
                        Portfolio &amp; Chantiers • Rive-Sud
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8 xl:col-span-7">
                        <h1 className="font-headline text-[40px] lg:text-6xl uppercase tracking-tight text-primary-container leading-[1.15] font-bold mb-4">
                            Nos réalisations sur le terrain
                        </h1>
                        <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                            Découvrez dans notre galerie photos un aperçu de nos interventions en élagage, en abattage,
                            en taille et en entretien professionnel des arbres sur la Rive-Sud de Montréal.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full mt-12 bg-surface-variant p-4 pt-6 border border-outline/20 shadow-sm">
                    <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-outline/20 pb-2 lg:pb-0 lg:pr-3">
                        <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Attentionné</span>
                        <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Écoute et conseils sur mesure</span>
                    </div>
                    <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-outline/20 pb-2 lg:pb-0 lg:pr-3">
                        <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Rigoureux</span>
                        <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Arboristes diplômés, respect des normes BNQ</span>
                    </div>
                    <div className="flex flex-col border-b md:border-b-0 lg:border-r border-outline/20 pb-2 lg:pb-0 lg:pr-3">
                        <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Soigné</span>
                        <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Terrain nettoyé après chaque intervention</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Écoresponsable</span>
                        <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Moins d’émission sur votre terrain</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
