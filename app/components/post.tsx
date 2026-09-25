import { formatDate, type Post as PostType } from "app/utils";
import React from "react";
import { CustomMDX } from "./mdx";
import { baseUrl } from "app/sitemap";

function Post({ post }: { post: PostType }) {
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Giovanni Aguirre",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title text-4xl tracking-tight md:text-5xl">
        {post.metadata.title}
      </h1>
      <div className="label mt-4 mb-12 flex justify-between items-center">
        <p>{formatDate(post.metadata.publishedAt)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

export default Post;
