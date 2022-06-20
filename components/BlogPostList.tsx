import Link from 'next/link';
import type { Blog } from 'contentlayer/generated';

interface IProps {
  posts: Blog[];
}

const BlogPostList = ({ posts }: IProps) => {
  return (
    <div className="w-full mt-20">
      <h2 className="text-2xl md:text-4xl font-bold text-black tracking-tight">
        Latest Posts
      </h2>

      <ul className="w-full flex flex-col mt-5 divide-y divide-gray-200">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a className="h-16 p-2 flex justify-between items-center rounded hover:bg-gray-50 text-gray-700">
                <h3 className="text-lg md:text-xl font-medium">{post.title}</h3>
                <p>{post.publishedAt}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
