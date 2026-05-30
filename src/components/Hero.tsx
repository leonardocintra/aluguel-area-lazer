"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MagneticButton } from "./ui/magnetic-button";

const HERO_FALLBACK_IMAGE = "/img/hero.jpg";
const HERO_PEXELS_QUERY = "outdoor party venue garden";

type PexelsSearchResponse = {
  photos?: Array<{
    src?: {
      landscape?: string;
      large2x?: string;
    };
  }>;
};

export function Hero() {
  const [heroImage, setHeroImage] = useState(HERO_FALLBACK_IMAGE);

  useEffect(() => {
    let isMounted = true;

    async function loadHeroImage() {
      try {
        const params = new URLSearchParams({
          query: HERO_PEXELS_QUERY,
          orientation: "landscape",
          per_page: "1",
        });

        const response = await fetch(`/api/pexels?${params.toString()}`);
        if (!response.ok) {
          return;
        }

        const data: PexelsSearchResponse = await response.json();
        const imageUrl = data.photos?.[0]?.src?.landscape ?? data.photos?.[0]?.src?.large2x;

        if (isMounted && imageUrl) {
          setHeroImage(imageUrl);
        }
      } catch {
        // Keep fallback image when external request fails.
      }
    }

    loadHeroImage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 md:pb-0 bg-surface-container overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src={heroImage}
          alt="A breathtaking outdoor event space in a lush garden setting at golden hour."
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative z-20 max-w-container-max-width mx-auto px-margin-desktop text-center flex flex-col items-center">
        <span className="inline-block py-2 px-4 bg-secondary-container/80 backdrop-blur-sm text-on-secondary-container rounded-full font-label-md text-label-md mb-6 uppercase tracking-widest shadow-sm">
          Espaço Exclusivo
        </span>
        <h1 className="font-display-lg text-display-lg text-on-primary max-w-4xl mb-6 drop-shadow-md">
          O cenário perfeito para os seus momentos mais inesquecíveis
        </h1>
        <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mb-10 drop-shadow">
          Celebre aniversários, chás revelação e eventos familiares em um refúgio de paz e natureza, com estrutura completa e sofisticação.
        </p>
        <MagneticButton>
          <button type="button" className="bg-linear-to-r from-[#075E54] to-[#25D366] hover:from-[#054d47] hover:to-[#1fa855] transition-all px-10 text-lg text-white pt-4 pb-5 mb-6 rounded-full shadow-lg">
            Reservar agora pelo WhatsApp
          </button>
        </MagneticButton>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-on-primary animate-bounce">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </section>
  );
}
