import SocialMedia from "../../containers/socialMedia";

export default function Footer() {
  return (
    <footer className="bg-[#171923] w-full px-4 py-6 pb-24 mt-auto md:pb-4">
      <div className="max-w-6xl mx-auto text-center flex justify-between items-center text-white">
        <h2 className="text-lg sm:text-xl max-w-[22ch] text-left">Get connected with me on social networks 😎</h2>
        <SocialMedia />
      </div>
    </footer>
  );
}
