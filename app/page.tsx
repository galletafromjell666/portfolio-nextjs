import Link from "next/link";
import { Accordion } from "app/components/accordion";

const experience = [
  {
    period: "March 2024 – Present",
    role: "Ooma Inc, Frontend Engineer L2",
    points: [
      "Develop new modules for a UCaaS platform as part of an 8-person team, taking features from early requirements all the way to production.",
      "Build cross-tenant applications and microfrontends that adapt to each customer's setup, collaborating with multiple teams to coordinate versioning and get their releases shipped.",
      "Publish and maintain shared npm packages on top of our internal design system, so components stay consistent and reusable across every microfrontend instead of being rebuilt.",
      "Use WebSockets to keep the UI in sync with real-time data, handling live updates smoothly without forcing full page refreshes.",
      "Translate PRDs and design mockups into pixel-perfect, robust features, handling edge cases carefully before they reach production.",
      "Review code to keep it clean, share ideas, and help the team write more readable, maintainable code through consistent feedback.",
      "Use AI to speed up my workflow by building custom skills and plugins that automate repetitive tasks and cut down on boilerplate.",
    ],
  },
  {
    period: "March 2023 – February 2024",
    role: "2600Hz, Software Engineer",
    points: [
      "Implemented new features and maintained existing functionality for a UCaaS platform built with React microfrontends orchestrated through SingleSPA, keeping each app independently deployable.",
      "Enhanced and supported a desktop application built with Electron, wiring main and renderer process communication and keeping it in sync with the web platform.",
      "Proposed and built proofs of concept for new features, then worked with the team to turn the best ideas into production work.",
      "Consumed real-time data events over WebSockets, optimizing data structures and the update flow so the UI stayed responsive under heavy event traffic.",
      "Worked closely with product and design to translate requirements into shipped features, and reviewed code to keep it clean, consistent, and readable.",
    ],
  },
];

export default function Page() {
  return (
    <section>
      <div className="mb-16 flex flex-col gap-10 md:flex-row md:gap-16">
        <h1 className="text-5xl leading-[1.05] tracking-tight md:w-1/2 md:text-7xl">
          Hey there, I&apos;m Giovanni Aguirre
        </h1>
        <div className="flex flex-col items-start gap-6 md:w-1/2">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a frontend engineer from El Salvador. Right now, I&apos;m
            working at a leading telecom company, building and maintaining a
            UCaaS platform. I love digging into TypeScript and finding creative
            ways to solve problems and build awesome user experiences. I&apos;m a
            huge fan of learning new things and taking on challenges—whether
            it&apos;s exploring new frameworks, improving my skills, or just
            figuring out how to make stuff work better.
          </p>
          <Link
            href="/contact"
            className="text-lg underline underline-offset-4"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div data-test-id="experience">
        <Accordion label="Experience" defaultOpen>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role} className="space-y-1">
                <p className="label">{job.period}</p>
                <h3 className="text-2xl">{job.role}</h3>
                <ul className="item-list mt-2 ml-4 list-disc list-inside text-sm text-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion label="Education">
          <div className="space-y-1">
            <p className="label">February 2019 – December 2023</p>
            <h3 className="text-2xl">
              University of El Salvador, Bachelor&apos;s Degree in Computer
              Systems Engineering.
            </h3>
            <p className="text-muted">Cum laude</p>
            <p className="mt-2 max-w-3xl text-muted">
              I studied Computer Systems Engineering at the University of El
              Salvador and graduated cum laude. The first semesters were heavy on
              math and physics, which is where I learned to break a problem into
              smaller pieces and work through it step by step. I also led a few
              team projects along the way, splitting up the work and keeping
              everyone on the same page. What stuck with me most, though, is a
              self-taught mindset: reading the docs, testing ideas on my own, and
              figuring things out instead of waiting for someone to hand me the
              answer.
            </p>
          </div>
        </Accordion>

        <Accordion label="Online Courses">
          <ul className="item-list text-muted">
            <li>Coursera, Python for Everybody Specialization</li>
            <li>Coursera, Intermediate PostgreSQL</li>
            <li>
              Google Cloud Skills Boost, Develop Serverless Applications on
              Cloud Run.
            </li>
          </ul>
        </Accordion>

        <Accordion label="Skills">
          <div className="flex flex-row gap-x-12">
            <ul className="item-list text-muted">
              <li>React</li>
              <li>Next.js</li>
              <li>MongoDB</li>
              <li>Drizzle ORM</li>
              <li>Node.js</li>
            </ul>
            <ul className="item-list text-muted">
              <li>Express</li>
              <li>Electron</li>
              <li>Zustand</li>
              <li>Typescript</li>
              <li>Python</li>
            </ul>
          </div>
        </Accordion>

        <Accordion label="Volunteering">
          <div className="space-y-1">
            <p className="label">February 2021 – December 2022</p>
            <h3 className="text-2xl">
              Glasswing International, Robotics Instructor
            </h3>
            <ul className="item-list mt-2 ml-4 list-disc list-inside text-sm text-muted">
              <li>
                Taught high school students the fundamentals of programming and
                robotics.
              </li>
              <li>
                Guided students in developing abilities that will help to solve
                problems using algorithms and soft skills.
              </li>
              <li>
                Collaborated in organizing and facilitating multi-school
                robotics tournaments.
              </li>
            </ul>
          </div>
        </Accordion>

        <Accordion label="Interests">
          <div className="space-y-1 text-muted">
            <p>
              Professional: micro frontend architecture, webRTC, websockets, API
              building, data science.
            </p>
            <p>Hobbies: electronics, gaming, PC building, gym training.</p>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
