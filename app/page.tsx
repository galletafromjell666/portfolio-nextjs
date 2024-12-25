import { Posts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello, I'm<br></br>
        Giovanni Aguirre
      </h1>
      <p className="mb-4 text-muted">
        {`Software Engineer specializing in frontend development, currently contributing to a leading telecommunications company by building and maintaining a robust UCaaS platform. Passionate about crafting seamless user experiences, I excel in diving deep into React, optimizing codebases, and enhancing application performance.`}
      </p>
      <div data-test-id="experience" className="m t-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-semibold">Experience</h1>
          </div>
          <div className="flex flex-col flex-1 space-y-4">
            <div className="flex-flex-row">
              <p className="text-muted text-sm">February 2024, Present</p>
              <h2>Leading Telecommunications Company, Frontend Engineer L2</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 item-list">
                <li>
                  Implement new features, maintain existing functionality UCaaS
                  platform using React micro front ends with SingleSPA.
                </li>
                <li>
                  Translate product requirements and design mockups into a
                  performant and robust UI.
                </li>
                <li>
                  Propose and develop proofs of concept for new features and
                  enhancements.
                </li>
                <li>
                  Document code changes and updates for better project
                  maintainability.
                </li>
              </ul>
            </div>
            <div className="flex-flex-row">
              <p className="text-muted text-sm">April, 2023, February 2024</p>
              <h2>2600Hz (Third party contractor), Software Engineer</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 item-list">
                <li>
                  Developed and maintained micro front ends for end-users of a
                  UCaaS platform, ensuring modular and scalable architecture
                  using React.
                </li>
                <li>
                  Enhanced and supported a desktop application built with
                  Electron, implementing new features and improving user
                  experience.
                </li>
                <li>
                  Propose and develop proofs of concept for new features and
                  enhancements.
                </li>
                <li>
                  Implemented real-time data updates using WebSockets,
                  optimizing performance to handle large data loads efficiently.
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
            <div className="flex-flex-row">
              <p className="text-muted text-sm">Feb, 2019, Dec 2023</p>
              <h2>
                University of El Salvador, Bachelor's Degree in Computer Systems
                Engineering.
              </h2>
              <p className="text-muted">Cum laude</p>
            </div>
            <div className="flex-flex-row">
              <h2>Online Courses</h2>
              <p className="text-muted">
                Python for Everybody Specialization, Intermediate PostgreSQL,
                Develop Serverless Applications on Cloud Run.
              </p>
            </div>
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
              <li>NextJS</li>
              <li>MongoDB</li>
              <li>Drizzle ORM</li>
              <li>NodeJS</li>
              <li>Websockets</li>
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
            <div className="flex-flex-row">
              <p className="text-muted text-sm">Feb, 2021, Dec 2022</p>
              <h2>Glasswing International, Robotics Instructor</h2>
              <ul className="text-muted text-sm list-disc list-inside ml-4 item-list">
                <li>
                  Taught high school students the fundamentals of programming
                  and robotics.
                </li>
                <li>
                  Guided students in developing problem-solving abilities and
                  essential soft skills, preparing them for real-world
                  challenges.
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
            <div className="flex-flex-row text-muted">
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
