import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';

import { IFile } from '@/types/mdx';

import { getFiles, getFileBySlug } from '@/lib/mdx';

import Post from '@/layouts/Post';

interface IProps {
  post: IFile;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Blog = ({ post }: IProps) => {
  return (
    <Post data={post.data}>
      <MDXRemote {...post.mdx} />
    </Post>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({
  params
}) => {
  const post = await getFileBySlug('blog', params?.slug);

  if (post) {
    return { props: { post } };
  }

  return { notFound: true };
};

export default Blog;
