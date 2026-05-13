import { notFound } from "next/navigation";
import { baseUrl } from "app/sitemap";
import Post from "app/components/post";
import { getProjectsPosts } from "app/utils";

export async function generateStaticParams() {
  let posts = getProjectsPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = getProjectsPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({ params }) {
  const { slug } = await params;
  let post = getProjectsPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}
