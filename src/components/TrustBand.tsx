import Image from "next/image";

const partners = [
  {
    name: "Allan Gray",
    src: "/allan-gray-logo.png",
    width: 160,
    height: 48,
  },
  {
    name: "Jasiri",
    src: "/jasiri-logo.png",
    width: 140,
    height: 48,
  },
];

export default function TrustBand() {
  return (
    <section className="py-14 border-y border-zuza-border bg-zuza-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10 text-zuza-subtle">
          Backed and Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-16 sm:gap-24">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
              style={{ height: 48 }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                style={{
                  filter: "grayscale(100%) brightness(10)",
                  maxHeight: 48,
                  width: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
