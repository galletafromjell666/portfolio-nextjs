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
    <div>
      {posts.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-6"
            href={`/${isBlogsPost ? "blog" : "projects"}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <div className=" w-[100px]">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>

              <div className="flex flex-col flex-1">
                <p className="text-primary text-lg tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                  {post.metadata.summary}
                </p>
                {post.metadata?.stack && (
                  <span className="text-primary tracking-tight">
                    Stack:
                    <span className="text-neutral-600 dark:text-neutral-400 tracking-tight ml-1">
                      {post.metadata.stack}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
