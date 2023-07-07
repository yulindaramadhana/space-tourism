'use client';

import { useRouter } from 'next/navigation'

export function ButtonCta() {
    const router = useRouter();

    return (
        <button
            className="btn-cta
                            text-btn-cta-sm
                            md:text-btn-cta
                            lg:text-btn-cta
                            xl:text-btn-cta
                            bg-baseColor-white
                            text-baseColor-black
                            rounded-full
                            w-btn-cta-sm
                            md:w-btn-cta-md
                            lg:w-btn-cta-lg
                            xl:w-btn-cta-xl
                            h-btn-cta-sm
                            md:h-btn-cta-md
                            lg:h-btn-cta-lg
                            xl:h-btn-cta-xl"
            onClick={() => router.push('/destination')}
        >
            Explore
        </button>
    )
}
