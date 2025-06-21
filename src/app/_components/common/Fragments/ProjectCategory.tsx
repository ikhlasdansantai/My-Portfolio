import ProjectTech from "./ProjectTech";

type projectCategoryProps = {
  category: string;
  links: {
    livePreview: string;
  };
  technology: string[];
};

export default function ProjectCategory({ category, links, technology }: projectCategoryProps) {
  const { livePreview } = links;

  if (category === "web development") {
    return (
      <>
        <div className="box space-y-2">
          <h3 className="font-medium">Live Preview</h3>
          <a href={livePreview} className="text-white/[.60]">
            {livePreview}
          </a>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Tech Stack</h3>
          <ProjectTech technology={technology} />
        </div>
      </>
    );
  } else if (category === "ui design") {
    return (
      <>
        <div className="box space-y-2">
          <h3 className="font-medium">Figma</h3>
          <a href={livePreview} className="text-white/[.60]">
            {livePreview}
          </a>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Tech Stack</h3>
          <ProjectTech technology={technology} />
        </div>
      </>
    );
  } else if (category === "mobile") {
    return (
      <>
        <div className="box space-y-2">
          <h3 className="font-medium">Readme</h3>
          <a href={livePreview} className="text-white/[.60]">
            {livePreview}
          </a>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Tech Stack</h3>
          <ProjectTech technology={technology} />
        </div>
      </>
    );
  } else if (category === "wip") {
    return (
      <div className="box space-y-2">
        <h3 className="font-medium">Live Preview</h3>
        <p className="text-white/[.60]">masih undefined 🚧</p>
      </div>
    );
  } else if (category === "motion graphics") {
    return (
      <>
        <div className="box space-y-2">
          <h3 className="font-medium">Live Preview</h3>
          <a href={livePreview} target="_blank" className="text-white/[.60]">
            {livePreview}
          </a>
        </div>
        <div className="box space-y-2">
          <h3 className="font-medium">Editing Tools</h3>
          <ProjectTech technology={technology} />
        </div>
      </>
    );
  }
}
