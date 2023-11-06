export default function ProjectCategory({ category }: { category: any }) {
  if (category === "semua") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-red-500"></div>
        <div className="card h-[200px] bg-red-500"></div>
      </div>
    );
  } else if (category === "ui design") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-green-500"></div>
        <div className="card h-[200px] bg-green-500"></div>
      </div>
    );
  } else if (category === "web development") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-orange-500"></div>
        <div className="card h-[200px] bg-orange-500"></div>
      </div>
    );
  } else if (category === "motion graphics") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-white"></div>
        <div className="card h-[200px] bg-white"></div>
      </div>
    );
  }
}
