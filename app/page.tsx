export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Golden Horizon Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
        }}
      />
      <div className="relative z-10 flex flex-col py-32 space-y-6 items-center justify-center min-h-screen font-sans max-w-5xl mx-auto">
        <h1 className="text-7xl font-bold bg-linear-to-t from-zinc-500 to-zinc-50 inline-block text-transparent bg-clip-text p-2">
          عطریـات زرنـگـار
        </h1>
        <p className="text-2xl text-zinc-400">
          {" "}
          عطر تنها یک بو نیست، شخصیت نامرئی توست.
        </p>
      </div>
    </div>
  );
}
