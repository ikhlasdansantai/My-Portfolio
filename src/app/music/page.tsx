export default function Page() {
  return (
    <main className="py-10 sm:pt-20 lg:pt-40 px-4 space-y-10 max-w-6xl mx-auto min-[2000px]:h-[40rem]">
      <div className="title">
        <h1 className="text-4xl text-white">Musik</h1>
        <p className="text-white/[.60] mt-2">List musik favorit & musik yang sering di putar</p>
      </div>
      <div className="spotify__list"></div>
    </main>
  );
}
