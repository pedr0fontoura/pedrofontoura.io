import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { IFile, IPostData } from '@/types/mdx';

import { isPostData } from '@/utils/typeGuards';

const root = process.cwd();

export async function getFiles(type: string): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(
  type: string,
  slug?: string
): Promise<IFile | null> {
  const filePath = slug
    ? path.join(root, 'data', type, `${slug}.mdx`)
    : path.join(root, 'data', `${type}.mdx`);

  const src = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(src);

  const mdx = await serialize(content);

  if (!isPostData(data)) {
    return null;
  }

  return { mdx, data };
}

export async function getAllFilesData(type: string): Promise<IPostData[]> {
  const files = fs.readdirSync(path.join(root, 'data', type));

  const filesData = files.reduce<IPostData[]>((allFiles, fileName) => {
    const filePath = path.join(root, 'data', type, fileName);

    const src = fs.readFileSync(filePath);

    const { data } = matter(src);

    if (!isPostData(data)) {
      return allFiles;
    }

    return [...allFiles, { ...data, slug: fileName.replace('.mdx', '') }];
  }, []);

  return filesData;
}
