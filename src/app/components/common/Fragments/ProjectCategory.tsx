import ProjectTech from "./ProjectTech";

export default function ProjectCategory({ category }: any) {
  if (category === "web development") {
    return (
      <>
        <div className="box space-y-2">
          <h3 className="font-medium">Live Preview</h3>
          <p className="text-white/[.60]">Link......</p>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Repo</h3>
          <p className="text-white/[.60]">Link......</p>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Tech Stack</h3>
          <ProjectTech />
        </div>
      </>
    );
  } else if (category === "ui design") {
    return (
      <div className="box space-y-2">
        <h3 className="font-medium">Figma</h3>
        <p className="text-white/[.60]">Link......</p>
      </div>
    );
  } else if (category === "wip") {
    return (
      <div className="box space-y-2">
        <h3 className="font-medium">Live Preview</h3>
        <p className="text-white/[.60]">masih undefined 🚧</p>
      </div>
    );
  } else if (category === "motion graphic") {
    return (
      <>
        <div className="box space-y-2">
          <h3 className="font-medium">Live Preview</h3>
          <p className="text-white/[.60]">Link......</p>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Editing Tools</h3>
          {/* <ProjectTech /> */}
        </div>
      </>
    );
  }
}
