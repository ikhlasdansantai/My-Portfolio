import Image from "next/image";

export default function CertificateCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
        <figure className="rounded-md overflow-hidden">
          <Image src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/http.jpg"} alt="gambar" height="200" width="200" style={{ width: "100%", height: "auto" }} loading="lazy" />
        </figure>
        <h2 className="text-white mt-4 mb-1">Belajar HTTP untuk Pemula</h2>
        <span className="text-white/[.60] text-xs">programmerzamannow</span>
      </div>
      <div className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
        <figure className="rounded-md overflow-hidden">
          <Image src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/html.jpg"} alt="gambar" height="200" width="200" style={{ width: "100%", height: "auto" }} loading="lazy" />
        </figure>
        <h2 className="text-white mt-4 mb-1">Learn The Basic Of HTML</h2>
        <span className="text-white/[.60] text-xs">SoloLearn</span>
      </div>
      <div className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
        <figure className="rounded-md overflow-hidden">
          <Image src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/CSS.jpg"} alt="gambar" height="200" width="200" style={{ width: "100%", height: "auto" }} loading="lazy" />
        </figure>
        <h2 className="text-white mt-4 mb-1">Learn The Basic Of CSS</h2>
        <span className="text-white/[.60] text-xs">SoloLearn</span>
      </div>
    </div>
  );
}
