import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-section-gap-desktop bg-surface-container-high dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline">
      <div className="max-w-container-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-2">
          <Link href="#" className="font-display-lg text-headline-sm text-primary dark:text-primary-fixed-dim block mb-4">
            VerdeLuxo Eventos
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            O cenário perfeito para os seus momentos mais inesquecíveis. Sofisticação e natureza em um só lugar.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim mb-2">Legal</h4>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/80 hover:text-tertiary-container dark:hover:text-tertiary-fixed-dim hover:underline transition-all">Privacidade</Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/80 hover:text-tertiary-container dark:hover:text-tertiary-fixed-dim hover:underline transition-all">Termos de Uso</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim mb-2">Ajuda</h4>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/80 hover:text-tertiary-container dark:hover:text-tertiary-fixed-dim hover:underline transition-all">FAQ</Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/80 hover:text-tertiary-container dark:hover:text-tertiary-fixed-dim hover:underline transition-all">Contato</Link>
        </div>
      </div>
      <div className="max-w-container-max-width mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/50 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant mb-2">
          © {new Date().getFullYear()} VerdeLuxo Eventos. Todos os direitos reservados.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Desenvolvido com amor por <a href="https://leonardocintra.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Leonardo Cintra</a>
        </p>
      </div>
    </footer>
  );
}
