import { Posts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">My Blog</h1>
      <Posts source="blog" />
    </section>
  );
}
