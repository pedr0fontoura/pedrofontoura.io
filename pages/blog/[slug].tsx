import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

import { ParsedUrlQuery } from 'querystring';

import BlogPost from '@/layouts/BlogPost';
import { MDXComponents } from '@/components/MDXComponents';

interface IProps {
  post: Blog;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const BlogLayout = ({ post }: IProps) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogPost data={post}>
      <Component components={{ ...MDXComponents }} />
    </BlogPost>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({
  params
}) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  if (post) {
    return { props: { post } };
  }

  return { notFound: true };
};

export default BlogLayout;
