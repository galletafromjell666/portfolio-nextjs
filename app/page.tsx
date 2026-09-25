import { Posts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hey there, I'm<br></br>
        Giovanni Aguirre
      </h1>
      <p className="mb-4 text-muted">
        I’m a frontend engineer from El Salvador. Right now, I’m working at a
        leading telecom company, building and maintaining a UCaaS platform. I
        love digging into TypeScript and finding creative ways to solve problems
        and build awesome user experiences. I’m a huge fan of learning new
        things and taking on challenges—whether it’s exploring new frameworks,
        improving my skills, or just figuring out how to make stuff work better.
      </p>
      <div data-test-id="experience" className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Experience</h1>
          </div>
          <div className="flex flex-col flex-1 space-y-6">
            <div className="space-y-1">
              <p className="text-muted text-sm">March 2024 – Present</p>
              <h2>Ooma Inc, Frontend Engineer L2</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 mt-2 item-list">
                <li>
                  Develop new modules for a UCaaS platform as part of an
                  8-person team, taking features from early requirements all the
                  way to production.
                </li>
                <li>
                  Build cross-tenant applications and microfrontends that adapt
                  to each customer&apos;s setup, collaborating with multiple
                  teams to coordinate versioning and get their releases shipped.
                </li>
                <li>
                  Publish and maintain shared npm packages on top of our
                  internal design system, so components stay consistent and
                  reusable across every microfrontend instead of being rebuilt.
                </li>
                <li>
                  Use WebSockets to keep the UI in sync with real-time data,
                  handling live updates smoothly without forcing full page
                  refreshes.
                </li>
                <li>
                  Translate PRDs and design mockups into pixel-perfect, robust
                  features, handling edge cases carefully before they reach
                  production.
                </li>
                <li>
                  Review code to keep it clean, share ideas, and help the team
                  write more readable, maintainable code through consistent
                  feedback.
                </li>
                <li>
                  Use AI to speed up my workflow by building custom skills and
                  plugins that automate repetitive tasks and cut down on
                  boilerplate.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="text-muted text-sm">March 2023 – February 2024</p>
              <h2>2600Hz, Software Engineer</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 mt-2 item-list">
                <li>
                  Implemented new features and maintained existing functionality
                  for a UCaaS platform built with React microfrontends
                  orchestrated through SingleSPA, keeping each app independently
                  deployable.
                </li>
                <li>
                  Enhanced and supported a desktop application built with
                  Electron, wiring main and renderer process communication and
                  keeping it in sync with the web platform.
                </li>
                <li>
                  Proposed and built proofs of concept for new features, then
                  worked with the team to turn the best ideas into production
                  work.
                </li>
                <li>
                  Consumed real-time data events over WebSockets, optimizing
                  data structures and the update flow so the UI stayed
                  responsive under heavy event traffic.
                </li>
                <li>
                  Worked closely with product and design to translate
                  requirements into shipped features, and reviewed code to keep
                  it clean, consistent, and readable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div data-test-id="education" className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Education</h1>
          </div>
          <div className="flex flex-col flex-1 space-y-1.5">
            <div className="space-y-1">
              <p className="text-muted text-sm">February 2019 – December 2023</p>
              <h2>
                University of El Salvador, Bachelor's Degree in Computer Systems
                Engineering.
              </h2>
              <p className="text-muted">Cum laude</p>
              <p className="text-muted mt-2">
                I studied Computer Systems Engineering at the University of El
                Salvador and graduated cum laude. The first semesters were heavy
                on math and physics, which is where I learned to break a problem
                into smaller pieces and work through it step by step. I also led
                a few team projects along the way, splitting up the work and
                keeping everyone on the same page. What stuck with me most,
                though, is a self-taught mindset: reading the docs, testing
                ideas on my own, and figuring things out instead of waiting for
                someone to hand me the answer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-test-id="online-courses" className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Online Courses</h1>
          </div>
          <div className="flex flex-row gap-x-12 flex-1">
            <ul className="text-muted item-list">
              <li>Coursera, Python for Python for Everybody Specialization</li>
              <li>Coursera, Intermediate PostgreSQL</li>
              <li>
                Google Cloud Skills Boost, Develop Serverless Applications on
                Cloud Run.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-test-id="skills" className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Skills</h1>
          </div>
          <div className="flex flex-row gap-x-12 flex-1">
            <ul className="text-muted item-list">
              <li>React</li>
              <li>Next.js</li>
              <li>MongoDB</li>
              <li>Drizzle ORM</li>
              <li>Node.js</li>
            </ul>
            <ul className="text-muted item-list">
              <li>Express</li>
              <li>Electron</li>
              <li>Zustand</li>
              <li>Typescript</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
      <div data-test-id="volunteering" className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Volunteering</h1>
          </div>
          <div className="flex flex-col flex-1">
            <div className="space-y-1">
              <p className="text-muted text-sm">February 2021 – December 2022</p>
              <h2>Glasswing International, Robotics Instructor</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 mt-2 item-list">
                <li>
                  Taught high school students the fundamentals of programming
                  and robotics.
                </li>
                <li>
                  Guided students in developing abilities that will help to
                  solve problems using algorithms and soft skills.
                </li>
                <li>
                  Collaborated in organizing and facilitating multi-school
                  robotics tournaments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div data-test-id="interests" className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Interests</h1>
          </div>
          <div className="flex flex-col flex-1">
            <div className="space-y-1 text-muted">
              <p>
                Professional: micro frontend architecture, webRTC, websockets,
                API building, data science.
              </p>
              <p>Hobbys: electronics, gaming, PC building, gym training.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-semibold border-t border-t-stone-950 dark:border-t-white pt-2">
          Blog entries
        </h2>
        <Posts source="blog" limit={3} random={1} />
      </div>
    </section>
  );
}
