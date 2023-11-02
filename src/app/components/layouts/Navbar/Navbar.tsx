export default function Navbar() {
  return (
    <nav className="fixed md:px-4 xl:px-0 md:left-0 right-0 flex justify-between items-center max-w-6xl mx-auto md:py-6 z-50">
      <div className="left__navbar hidden md:flex gap-10">
        <div className="block py-4 px-5 text-center rounded-md bg-[#2ba386]">IK</div>
        <ul className="hidden md:flex  justify-between items-center gap-8 text-white">
          <li>Overview</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="px-4 py-2 rounded-md bg-[#2ba386] text-white">Punya Project?</div>

      <ul className="nav_bottom fixed bottom-0 left-0 right-0 px-6 py-4 bg-[#1e1f2b] border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg flex justify-between md:hidden text-white/[.60]">
        <li className="border-b-4 border-[#2ba386]">Home</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

{
  /* <nav className="fixed hidden px-4 xl:px-0 left-0 right-0 lg:flex justify-between items-center max-w-6xl mx-auto py-8"> */
}
