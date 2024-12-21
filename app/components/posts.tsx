import { getBlogPosts, formatDate, getProjectsPosts } from "app/utils";
import Link from "next/link";

interface PostsProps {
  source: "blog" | "projects";
}

export function Posts({ source }: PostsProps) {
  const isBlogsPost = source === "blog";
  const allBlogs = isBlogsPost ? getBlogPosts() : getProjectsPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${isBlogsPost ? "blog" : "projects"}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <div className=" w-[100px]">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>

              <div className="flex flex-col flex-1">
                <p className="text-neutral-900 dark:text-neutral-100 text-lg tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                  {post.metadata.summary}
                </p>
                {post.metadata?.stack && (
                  <span className="text-neutral-900 dark:text-neutral-100 tracking-tight">
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
