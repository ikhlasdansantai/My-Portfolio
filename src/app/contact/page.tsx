import type { Metadata } from "next";
import classNames from "classnames";
import ContactReady from "../_components/containers/contactReady";
import ContactNotReady from "../_components/containers/ContactNotReady";

export const metadata: Metadata = {
  title: "Contact",
  description: "Work In Progress:3",
};

export default function Page() {
  const contactPageReady = false;

  return (
    <main
      className={classNames({
        "grid-cols-1 gap-4 md:gap-0 lg:gap-40 items-start md:grid-cols-2": contactPageReady !== false,
        "grid py-20 sm:py-20 xl:py-60 justify-center px-4 h-screen max-w-6xl mx-auto min-[2000px]:h-[40rem]": true,
      })}
    >
      {contactPageReady ? <ContactReady /> : <ContactNotReady />}
    </main>
  );
}
