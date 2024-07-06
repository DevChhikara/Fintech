import Image from "next/image";
import { object } from "zod";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset bg-[url('/icons/gradient-mesh.svg')] bg-cover">
        <Image
          src="/icons/card-6376665_1280 Background Removed.png"
          alt="Auth image"
          width={500}
          height={500}
          className="  rounded-l-xl"
        />
      </div>
    </main>
  );
}
