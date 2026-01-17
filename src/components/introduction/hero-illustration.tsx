import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative rounded-full bg-white overflow-hidden w-50 h-50 md:w-70 md:h-70 xl:w-80 xl:h-80">
      <Image
        src="/illustration/developer-memoji.png"
        alt="Developer Main Icon"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 200px, (max-width: 1024px) 400px, 520px"
        priority
      />
    </div>
  );
}
