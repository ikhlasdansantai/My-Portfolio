import React from "react";
import ProjectCategory from "../../common/Fragments/ProjectCard";
import ProjectCard from "../../common/Fragments/ProjectCard";
import Image from "next/image";

export default function ProjectFilter({ show, setShow, category }: any) {
  return (
    <>
      <ProjectCard show={show} setShow={setShow} category={category} />
      {/* <ProjectCategory category="semua" /> */}
    </>
  );
}
