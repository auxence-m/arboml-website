import Image from "next/image";
import {services} from "@/app/data";


export default function ServiceDescription() {
    return (
        <div className="bg-green-50 mx-auto px-4 py-20 sm:py-24">
            {services.map((service, index) => (
                <div key={service.name} id={service.id} className={`mx-auto max-w-2xl grid grid-cols-1 py-12 gap-x-8 gap-y-10 lg:gap-x-16 lg:max-w-7xl lg:grid-cols-2 scroll-mt-16 md:scroll-mt-20 ${index !== services.length - 1 ? "border-b border-b-gray-500" : ""}`}>
                    <div className="relative flex flex-col justify-start">
                        <h2 className="text-3xl/8 font-semibold text-gray-900">
                            {service.name}
                        </h2>
                        <div className="mt-6 text-lg/8 text-pretty text-gray-800 whitespace-pre-line">
                            {service.description}
                        </div>
                    </div>
                    <div className={`relative max-h-96 max-lg:order-first ${index % 2 !== 0 ? "lg:order-first" : ""}`}>
                        <Image
                            alt={service.name}
                            src={service.imageSrc}
                            width={4032}
                            height={3024}
                            priority
                            className="rounded-lg size-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}