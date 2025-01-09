import { Posts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello, I'm<br></br>
        Giovanni Aguirre
      </h1>
      <p className="mb-4 text-muted">
        Hello there, I’m a frontend engineer from El Salvador. Right now, I’m
        working at a leading telecom company, building and maintaining a UCaaS
        platform. I love digging into TypeScript and finding creative ways to
        solve problems and build awesome user experiences. I’m a huge fan of
        learning new things and taking on challenges—whether it’s exploring new
        frameworks, improving my skills, or just figuring out how to make stuff
        work better.
      </p>
      <div data-test-id="experience" className="m t-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Experience</h1>
          </div>
          <div className="flex flex-col flex-1 space-y-4">
            <div className="flex-flex-row space-y-0.5">
              <p className="text-muted text-sm">March 2024, Present</p>
              <h2>Ooma Inc, Frontend Engineer L2</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 item-list">
                <li>
                  Develop new modules for a UcaaS platform as part of a 8-person
                  team.
                </li>
                <li>
                  Translate product requirements and design mockups into a pixel
                  perfect and robust UI.
                </li>
                <li>
                  Do code reviews to keep the code clean, share ideas and help
                  to write better, more readable code.
                </li>
              </ul>
            </div>
            <div className="flex-flex-row space-y-0.5">
              <p className="text-muted text-sm">March, 2023, February 2024</p>
              <h2>2600Hz, Software Engineer</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 item-list">
                <li>
                  Implemented new features, maintained existing functionality for a
                  UCaaS platform using React micro front ends with SingleSPA.
                </li>
                <li>
                  Enhanced and supported a desktop application built with
                  Electron.
                </li>
                <li>Propose and develop proofs of concept for new features.</li>
                <li>
                  Consume real-time data events using WebSockets and optimizing
                  data structures to improve performance.
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
            <div className="flex-flex-row space-y-0.5">
              <p className="text-muted text-sm">Feb, 2019, Dec 2023</p>
              <h2>
                University of El Salvador, Bachelor's Degree in Computer Systems
                Engineering.
              </h2>
              <p className="text-muted">Cum laude</p>
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
              <li>React (2.5 years)</li>
              <li>Next.js (1 year)</li>
              <li>MongoDB (1 year)</li>
              <li>Drizzle ORM(1 year)</li>
              <li>Node.js(2 years)</li>
            </ul>
            <ul className="text-muted item-list">
              <li>Express (2 years)</li>
              <li>Electron (2 year)</li>
              <li>Zustand (2 year)</li>
              <li>Typescript (2.5 years)</li>
              <li>Python (1.5 year)</li>
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
            <div className="flex-flex-row space-y-0.5">
              <p className="text-muted text-sm">Feb, 2021, Dec 2022</p>
              <h2>Glasswing International, Robotics Instructor</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 item-list">
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
            <div className="flex-flex-row space-y-0.5 text-muted">
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
        <h2 className="text-2xl font-semibold dark:border-t-white border-t-1 pt-2 border-t-stone-950 mt-2">
          Blog entries
        </h2>
        <Posts source="blog" />
      </div>
    </section>
  );
}
