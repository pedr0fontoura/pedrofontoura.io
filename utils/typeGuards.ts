import { IPostData } from '@/types/mdx';

export function isPostData(variableToCheck: any): variableToCheck is IPostData {
  return (
    !!(variableToCheck as IPostData).title &&
    !!(variableToCheck as IPostData).publishedAt
  );
}
