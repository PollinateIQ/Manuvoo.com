import { Lock, ShieldCheck } from "lucide-react";
import { company } from "@/config/company";
import { useTheme } from "@/hooks/useTheme";

interface PaymentMethodsProps {
  className?: string;
}

const cards = [
  { src: "/images/payments/visa.svg", alt: "Visa accepted" },
  { src: "/images/payments/mastercard.svg", alt: "Mastercard accepted" },
];

/**
 * Card scheme acceptance marks plus the security, currency and country of
 * domicile statements required by Visa / MasterCard for e-commerce merchant
 * websites.
 *
 * Rendered ONCE per page, in the Footer only. Do not add this to a page body —
 * the footer is on every page, so a second copy is pure duplication.
 */
export function PaymentMethods({ className = "" }: PaymentMethodsProps) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <p
        className={`mb-3 text-sm font-semibold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Payments accepted
      </p>

      <div className="flex items-center gap-3">
        {cards.map((card) => (
          <div
            key={card.alt}
            className={`flex h-[54px] w-[86px] items-center justify-center rounded-lg border bg-white px-2.5 py-2 ${
              theme === "dark" ? "border-white/20" : "border-gray-200"
            }`}
          >
            <img
              src={card.src}
              alt={card.alt}
              className="h-full w-full object-contain"
              width={86}
              height={54}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
        <span className="inline-flex items-center gap-2">
          <Lock className="h-4 w-4 flex-shrink-0 text-orange-500" />
          TLS encrypted
        </span>
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 flex-shrink-0 text-orange-500" />
          3D Secure authenticated
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        All transactions in South African Rand ({company.currency.code}) ·
        Country of domicile: {company.countryOfDomicile}
      </p>
    </div>
  );
}
