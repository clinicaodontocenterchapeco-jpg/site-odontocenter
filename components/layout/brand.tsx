import Image from "next/image";

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <a
      href="#inicio"
      aria-label="Odonto Center Chapecó — início"
      className="focus-ring inline-flex min-h-11 items-center rounded-md"
    >
      <Image
        src="/odonto-center.webp"
        width={340}
        height={71}
        priority={priority}
        alt="Odonto Center Clínica Odontológica"
        className="h-auto w-[9.65rem] lg:w-[15.5rem]"
      />
    </a>
  );
}
