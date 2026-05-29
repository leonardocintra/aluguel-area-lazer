import Image from "next/image";

export function Gallery() {
  return (
    <section className="py-section-gap-desktop bg-background" id="galeria">
      <div className="max-w-container-max-width mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Experiências Reais</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Inspire-se com os momentos mágicos vividos em nosso espaço. Da diversão infantil à elegância de um evento romântico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px]">
          <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group shadow-sm">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_IystbhwjVOpI0Ec5tOO475VulriRKNGQ74qFfAVYhUKs9JYVw0Sugd2WROyifTjRQIhJD9ACRf-65P6ys7v6WWMFAVEOUvPPhTzJdI9J9F0zragwrKtxdtZERLyREiVgdxdMx-r85ceHlNg-eajlaQ8Ng5sMGsxv3ZdUHAk5Aeqm-jgIii_uZrHhHdRSPjf95nfJ4o-gfN5MiELc93fMxXFLsJbyNHqsmp3V1pZIPdtzavc6DT5tCEawHBx004G0rPxRTjksfRU"
              alt="Festa Familiar"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-on-primary font-headline-sm text-headline-sm">Celebrações Familiares</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative group shadow-sm">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_yW0zZpFLceiZ5dX6OTLxQc_VVWWdpMDKKNUyHVlcBtecYXHoyxcpgRWX7HF6O0tI6OjgV_4PTSjRNmfplQCb9yHEY-rtg6w5qgYaNLv2W9JCSnBdQCt9Fa86hcQcUmOF11JnisAJPKMzKfKKg843P0vDLgwFQI8iIlqvYo9AlhE7TNxv_lopqqov-ce2xxqatzc56QbkXmsyXwZks_5gVjNO5OXcVGwPLiJ9M0KTIc5Ujrl-smLpMy1Cma-HKUpZ4ubVOaN5-c"
              alt="Festa Infantil"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-on-primary font-headline-sm text-headline-sm">Aniversários Infantis</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative group shadow-sm">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VpSzp8CDXKlfRvm5vJgdOoE6hN632C63DZJjZpron-NecTd-3BGplskQQd5zhKeqQ1aR4kSYMeCmKgyt6niRZeTM8QkBJbrurYhkrbeTyMfuoLI-d5OgKfgwcUtL5AqT6Y6EC-Mpf8Qr0RjeTKchI3J04Ny2IKrg5RLs3QfgXmyzRAuy1CMG7NcY5kU-NkPfUvUTaizCzA6YoCTRUrcYKyR6Z0kgk3r7-_ASlWeCZiCRehVtwAlonNt26_uHKqwdd0GwEn9Pm4Y"
              alt="Evento Romântico"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-on-primary font-headline-sm text-headline-sm">Momentos a Dois</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
