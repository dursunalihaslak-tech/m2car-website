export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {/* Telefon */}
      <a
        href="tel:08508888098"
        aria-label="0850 888 80 98 numarasını ara"
        className="group flex h-12 items-center gap-3 rounded-full bg-red-600 px-3 text-white shadow-xl transition hover:bg-red-700 md:h-13 md:px-5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
        </svg>

        <span className="hidden text-xs font-bold md:block">
          0850 888 80 98
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/905336027805"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden mesaj gönder"
        className="flex h-12 items-center gap-3 rounded-full bg-green-600 px-3 text-white shadow-xl transition hover:bg-green-700 md:h-13 md:px-5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8.3 8.2c.5 3.1 2.3 5 5.5 6.2" />
        </svg>

        <span className="hidden text-xs font-bold md:block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}