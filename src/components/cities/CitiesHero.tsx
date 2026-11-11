export default function CitiesHero() {
    return (
        <section className="relative w-full bg-surface pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-surface-container-high text-primary-container mb-4">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-headline text-[11px] uppercase tracking-widest font-bold">
                        Couverture géographique • Rive-Sud de Montréal
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8">
                        <h1 className="font-headline text-[40px] lg:text-6xl uppercase tracking-tight text-primary-container leading-[1.15] font-bold mb-4">
                            Nous intervenons sur l’ensemble de la{" "}
                            <span className="text-secondary underline decoration-secondary-container decoration-4 underline-offset-8">
                                Rive-Sud de Montréal
                            </span>
                        </h1>
                        <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                            Que vous soyez un particulier, une copropriété ou un commerce, nous nous déplaçons directement chez vous, 
                            partout sur la Rive-Sud de Montréal. Notre équipe d&#39;arboristes qualifiés réalise les travaux arboricoles,
                            dans le respect des normes de sécurité et des bonnes pratiques de l&#39;industrie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
