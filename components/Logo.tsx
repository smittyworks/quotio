import Image from "next/image";

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Quotio Logo"
      width={48}
      height={48}
      className={className}
    />
  );
}
