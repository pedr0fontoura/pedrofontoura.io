import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { IFile } from '@/types/mdx';

import { isPostData } from '@/utils/typeGuards';

const root = process.cwd();

export async function getFiles(type: string): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(
  type: string,
  slug?: string
): Promise<IFile | undefined> {
  const filePath = slug
    ? path.join(root, 'data', type, `${slug}.mdx`)
    : path.join(root, 'data', `${type}.mdx`);

  const src = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(src);

  if (isPostData(data)) {
    const mdx = await serialize(content);

    return { mdx, data };
  }
}
