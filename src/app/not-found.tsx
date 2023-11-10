import Image from "next/image";
import { Suspense } from "react";

export default function NotFound() {
  return (
    <div className="text-center h-screen flex items-center justify-center gap-4 flex-col">
      <Suspense fallback={<p>Sedang Dimuat...</p>}>
        <figure className="w-40">
          <Image src={"https://media.giphy.com/media/cYI30JtRHiN15pIPQ8/giphy.gif"} alt="GIF" width={200} height={200} style={{ width: "100%", height: "auto" }} />
        </figure>
      </Suspense>
      <h1 className="text-white">
        <b>Maaf</b> , Halaman Yang Kamu Cari Tidak Ada
      </h1>
      <button className="border px-3 py-2 text-white bg-green-900">Kembali</button>
    </div>
  );
}
