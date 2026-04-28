"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 w-full max-w-full overflow-hidden border-t border-border/50 bg-card/95 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-3 min-w-0">
        <a
          href="tel:+27679817605"
          className="flex min-w-0 flex-col items-center justify-center gap-1 py-3 text-muted-foreground transition-colors hover:text-primary"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-medium">Call</span>
        </a>

        <a
          href="https://wa.me/27679817605?text=Hi%20I'd%20like%20a%20quote%20for%20my%20car"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 flex-col items-center justify-center gap-1 bg-[#25D366] py-3 text-white"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        <Link
          href="#quote"
          className="flex min-w-0 flex-col items-center justify-center gap-1 py-3 text-muted-foreground transition-colors hover:text-primary"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs font-medium">Quote</span>
        </Link>
      </div>
    </div>
  );
}
