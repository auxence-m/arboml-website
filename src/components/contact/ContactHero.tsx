export default function ContactHero() {
    return (
        <section className="relative w-full bg-surface-container-low pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-outline-variant/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary text-secondary-fixed mb-4">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-secondary-fixed" />
                    <span className="font-headline text-[11px] uppercase tracking-widest font-bold">
                        Prise de contact • Rive-Sud de Montréal
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8">
                        <h1 className="font-headline text-[40px] lg:text-6xl uppercase tracking-tight text-primary-container leading-[1.15] font-bold mb-4">
                            Contactez notre équipe d’arboristes qualifiés
                        </h1>
                        <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                            Vous avez une question sur l’état de vos arbres ou des travaux arboricoles en tête ?
                            <br/>
                            Vous pouvez nous appeler, nous envoyer un message texte ou nous écrire par courriel.
                            Vous pouvez aussi nous laisser un message à l’aide du formulaire ci-dessous.
                            Notre équipe vous répondra dans les meilleurs délais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}