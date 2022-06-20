import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import type { Blog } from 'contentlayer/generated';
import { parseISO, format } from 'date-fns';

import Page from '@/components/Page';

interface Props {
  data: Blog;
  children: React.ReactNode;
}

const BlogPost = ({ children, data }: Props) => {
  return (
    <Page
      title={`${data.title} - Pedro Fontoura`}
      description={data.summary}
      image={`https://pedrofontoura.io${data.image}`}
      date={new Date(data.publishedAt).toISOString()}
      type="article"
    >
      <header className="flex justify-start items-center max-w-4xl mx-auto">
        <Link href="/">
          <a
            aria-label="Go back to the homepage"
            className="h-10 w-10 flex justify-center items-center rounded bg-black text-white"
          >
            <FaArrowLeft size={20} />
          </a>
        </Link>
      </header>

      <article className="flex flex-col justify-start items-start max-w-4xl mx-auto">
        <header className="mt-10 w-full">
          <h1 className="text-5xl font-bold text-black tracking-tight">
            {data.title}
          </h1>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2 relative">
                <Image
                  alt="Pedro Fontoura"
                  layout="fill"
                  src="/avatar.png"
                  className="rounded-full"
                />
              </div>
              <p>Pedro Fontoura</p>
            </div>
            <p>{format(parseISO(data.publishedAt), 'MMMM dd, yyyy')}</p>
          </div>
        </header>

        <section className="max-w-4xl mt-10 prose">{children}</section>
      </article>
    </Page>
  );
};

export default BlogPost;
