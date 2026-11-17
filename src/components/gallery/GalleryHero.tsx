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
                    <div className="lg:col-span-8">
                        <h1 className="font-headline text-[40px] lg:text-6xl uppercase tracking-tight text-primary-container leading-[1.15] font-bold mb-4">
                            Nos réalisations sur le terrain
                        </h1>
                        <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                            Découvrez dans notre galerie photos un aperçu de nos interventions en élagage, en abattage,
                            en taille et en entretien professionnel des arbres sur la Rive-Sud de Montréal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
