import { Posts } from "app/components/posts";
import React from "react";

function page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <Posts source="projects" />
    </section>
  );
}

export default page;
