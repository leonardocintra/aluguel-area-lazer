import Link from "next/link";

export function FloatingWhatsApp() {
  return (
    <Link href="#reserva" className="fixed bottom-8 right-8 bg-tertiary-container text-on-tertiary-container w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-tertiary transition-colors z-50 transform hover:scale-110">
      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
    </Link>
  );
}
