import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IPostData {
  title: string;
  publishedAt: string;
  slug?: string;
}

export interface IFile {
  data: IPostData;
  mdx: MDXRemoteSerializeResult<Record<string, unknown>>;
}
