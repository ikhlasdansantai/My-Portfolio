import Image from "next/image";
import React from "react";
import CiscoCertif from "../../../../assets/projects/badges/cisco-cybersec-introduction.png";

export default function BadgeLists() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
        <figure className="rounded-md overflow-hidden">
          <Image
            src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/refs/heads/v.2/assets/projects/badges/thm-hc.png"}
            alt="gambar"
            height="400"
            width="400"
            style={{ width: "100%", height: "auto", aspectRatio: "12/9", objectFit: "unset" }}
            loading="lazy"
            quality={100}
          />
        </figure>
        <h2 className="text-white mt-4 mb-1">Hash Cracker</h2>
        <span className="text-white/[.60] text-xs">TryHackMe</span>
      </div>
      <div className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
        <figure className="rounded-md overflow-hidden">
          <Image src={CiscoCertif} alt="gambar" height="400" width="400" style={{ width: "100%", height: "auto", aspectRatio: "12/9", objectFit: "cover" }} loading="lazy" quality={100} />
        </figure>
        <h2 className="text-white mt-4 mb-1">Introduction To Cybersecurity</h2>
        <span className="text-white/[.60] text-xs">Cisco Networking Academy</span>
      </div>
    </div>
  );
}
