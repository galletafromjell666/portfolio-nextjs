import React from "react";
import { GitHub, Gitlab, Linkedin, MessageSquare } from "react-feather";

function page() {
  return (
    <section>
      <h1 className="mb-8 text-6xl font-semibold tracking-tighter">Contact</h1>
      <div className="mb-8">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:giovanni.aguirrez@hotmail.com"
          className="text-3xl font-semibold tracking-tighter underline"
        >
          giovanni.aguirrez@hotmail.com
        </a>
      </div>
      <h1 className="mb-8 text-xl font-semibold tracking-tighter ">Social:</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-2">
          <Linkedin />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/gioaguirre664/"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row space-x-2">
          <GitHub />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/galletafromjell666"
          >
            GitHub
          </a>
        </div>
        <div className="flex flex-row space-x-2">
          <Gitlab />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/gio.aguirre"
          >
            GitLab
          </a>
        </div>
        <div className="flex flex-row space-x-2">
          <MessageSquare />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/ZQhXCaNU"
          >
            Discord
          </a>
        </div>
      </div>
    </section>
  );
}

export default page;

//https://discord.gg/ZQhXCaNU
