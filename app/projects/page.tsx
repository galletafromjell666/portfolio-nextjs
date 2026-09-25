import { Posts } from "app/components/posts";
import React from "react";

function page() {
  return (
    <section>
      <h1 className="mb-12 text-5xl tracking-tight md:text-7xl">
        My Projects
      </h1>
      <Posts source="projects" />
    </section>
  );
}

export default page;
