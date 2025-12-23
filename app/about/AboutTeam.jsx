import Image from "next/image";

export default function AboutTeam() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">
        Meet the Innovators
      </h2>
      <p className="text-center text-[--color-muted] max-w-3xl mx-auto mb-12">
        We're a passionate team of designers, engineers, and data experts
        dedicated to bringing your vision to life through full-circle digital
        experiences that move fast without missing the details.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            name: "Amir Khaled",
            role: "Founder & CEO",
            img: "/images/tech-team/pp.jpg",
          },
          {
            name: "Nora Saleh",
            role: "Lead UI/UX Designer",
            img: "/images/tech-team/pp.jpg",
          },
          {
            name: "Omar Aziz",
            role: "AI & Data Scientist",
            img: "/images/tech-team/pp.jpg",
          },
        ].map((member, i) => (
          <div
            key={i}
            className="card flex flex-col items-center p-4 rounded-2xl bg-[--color-card] shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
              <Image
                src={member.img}
                alt={`Photo of ${member.name}`}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-semibold">{member.name}</h4>
            <p className="text-[--color-muted] text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
