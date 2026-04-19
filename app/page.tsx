import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
        }}
      />
      <div className="relative z-10 flex flex-col md:space-y-6 sm:space-y-3 items-center justify-center min-h-screen font-sans max-w-5xl mx-auto">
        <Image
          src="/zarnegra-perfume-logo.png"
          height={200}
          width={200}
          alt="لوگوی عطریات زرنگار"
          priority
          sizes="(max-width: 768px) 96px, 176px"
          className="max-w-24 max-h-24 md:max-w-44 md:max-h-44 object-contain"
        />
        <h1 className="text-4xl md:text-7xl font-bold bg-linear-to-t from-zinc-500 to-zinc-50 inline-block text-transparent bg-clip-text p-2">
          عطریات زرنگار
        </h1>
        <p className="sm:text-2xl text-zinc-400 text-center">
          عطر تنها یک بو نیست، شخصیت نامرئی توست.
        </p>

        <div className="max-w-3xl w-full max-auto flex flex-col sm:flex-row md:px-4 px-8 xl:px-0 items-center justify-between gap-6 mt-8 md:mt-16">
          <Link
            href="https://wa.me/93793445600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تماس با عطریات زرنگار از طریق واتساپ"
            className="bg-linear-to-br from-yellow-700 to-yellow-300 w-full h-20 md:h-24 px-4 py-2 rounded-2xl flex items-center justify-between relative overflow-hidden"
          >
            <Image
              src="/whatsapp.svg"
              alt="whatsapp logo"
              aria-hidden="true"
              unoptimized
              width={140}
              height={140}
              className="absolute h-24 w-24 md:h-36 md:w-36 left-3 top-3 opacity-80"
            />
            <h3 className="text-zinc-900 text-3xl sm:text-4xl font-semibold text-start z-10">
              واتساپ
            </h3>
          </Link>

          <Link
            href="https://www.instagram.com/zarnegarperfume/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="مشاهده صفحه اینستاگرام عطریات زرنگار"
            className="bg-linear-to-br from-yellow-700 to-yellow-300 w-full h-20 md:h-24 px-4 py-2 rounded-2xl flex items-center justify-between relative overflow-hidden"
          >
            <Image
              src="/instagram-logo.svg"
              alt=""
              aria-hidden="true"
              unoptimized
              width={140}
              height={140}
              className="absolute h-24 w-24 md:h-36 md:w-36 left-3 top-3 opacity-80"
            />
            <h3 className="text-zinc-800 text-3xl sm:text-4xl font-semibold text-start z-10">
              اینستاگرام
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
