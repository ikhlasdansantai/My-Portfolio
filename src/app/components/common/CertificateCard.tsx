"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Certificate {
  name: string;
  url: string;
  source: string;
}

export default function CertificateCard() {
  const [certificates, setCertificates] = useState<Certificate[] | null>(null);

  async function getCertificate() {
    try {
      const res = await fetch("/api/certificates");
      if (res.ok) {
        const data = await res.json();
        setCertificates(data.data);
      } else console.error("Server Internal Error");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCertificate();
  }, []);

  if (certificates === null) return <p className="text-white">Loading....</p>;
  if (certificates.length === 0) return <p className="text-white">No certificates available.</p>;

  return (
    <>
      {certificates.map(({ name, url, source }, index) => (
        <div key={index} className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
          <figure className="rounded-md overflow-hidden">
            <Image src={url} alt="gambar" height="200" width="200" style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
          </figure>
          <h2 className="text-white mt-4 mb-1">{name}</h2>
          <span className="text-white/[.60] text-xs">{source}</span>
        </div>
      ))}
    </>
  );
}
