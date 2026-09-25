import {
  getBlogPosts,
  formatDate,
  getProjectsPosts,
  type Post,
} from "app/utils";
import Link from "next/link";

interface PostsProps {
  source: "blog" | "projects";
  limit?: number;
  random?: number;
}

const byNewestFirst = (a: Post, b: Post) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

export function Posts({ source, limit, random = 0 }: PostsProps) {
  const isBlogsPost = source === "blog";
  const allPosts = (isBlogsPost ? getBlogPosts() : getProjectsPosts()).sort(
    byNewestFirst
  );

  const latest = limit ? allPosts.slice(0, limit) : allPosts;
  const picks = limit
    ? [...allPosts.slice(limit)]
        .sort(() => Math.random() - 0.5)
        .slice(0, random)
    : [];
  const posts = [...latest, ...picks].sort(byNewestFirst);

  return (
    <div className="border-b border-b-black/15 dark:border-b-white/15">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="group flex flex-col gap-2 border-t border-t-black/15 py-6 transition-colors hover:text-neutral-500 dark:border-t-white/15 md:flex-row md:gap-8"
          href={`/${isBlogsPost ? "blog" : "projects"}/${post.slug}`}
        >
          <div className="shrink-0 md:w-[140px]">
            <p className="label tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <p className="text-2xl tracking-tight group-hover:underline">
              {post.metadata.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {post.metadata.summary}
            </p>
            {post.metadata?.stack && (
              <span className="label mt-1">
                Stack:
                <span className="ml-1 normal-case tracking-normal text-neutral-600 dark:text-neutral-400">
                  {post.metadata.stack}
                </span>
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
