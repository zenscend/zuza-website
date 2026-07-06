import Image from "next/image";

const team = [
  {
    name: "Koketso Mzimba",
    role: "CEO",
    bio: "Koketso leads Zuza's vision and strategy, driving the mission to give independent vendors the tools and market access they need to compete and grow.",
    image: "/team/koketso.png",
    alt: "Koketso Mzimba, CEO of Zuza",
    objectPosition: "",
  },
  {
    name: "Winston Letwaba",
    role: "COO",
    bio: "Winston runs Zuza's day-to-day operations, making sure the platform's supplier network and vendor onboarding run smoothly and reliably.",
    image: "/team/winston.png",
    alt: "Winston Letwaba, COO of Zuza",
    objectPosition: "object-top",
  },
  {
    name: "Bongani Mlumbi",
    role: "Tech Lead / CTO",
    bio: "Bongani leads Zuza's engineering, building the inventory, analytics, and supplier tools that keep vendors focused on growing their business, not their admin.",
    image: "/team/bongani.png",
    alt: "Bongani Mlumbi, Tech Lead / CTO of Zuza",
    objectPosition: "",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 border-t border-zuza-border bg-zuza-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-zuza-yellow">
            Our People
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            The Team Behind Zuza
          </h2>
          <p className="text-lg text-zuza-muted">
            A small team building the tools independent African vendors need
            to run and grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zuza-border">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-zuza-card hover:bg-zuza-surface2 transition-colors"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className={`object-cover ${member.objectPosition}`}
                />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-base text-white">{member.name}</h3>
                <p className="text-sm font-semibold text-zuza-yellow mt-1">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-zuza-subtle mt-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
