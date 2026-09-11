import Image from "next/image";

export default function YearBanner() {
  return (
    <section data-nav-theme="dark" className="relative w-full bg-paper">
      <div className="relative aspect-[1440/532] w-full">
        <Image
          src="/images/backgrounds/2025.png"
          alt="2025"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
