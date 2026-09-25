import { Posts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-12 text-5xl tracking-tight md:text-7xl">
        My Blog
      </h1>
      <Posts source="blog" />
    </section>
  );
}
