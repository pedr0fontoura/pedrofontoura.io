import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

import { IPostData } from '@/types/mdx';

import Page from '@/components/Page';

interface IProps {
  data: IPostData;
}

const Post: React.FunctionComponent<IProps> = ({ children, data }) => {
  return (
    <Page title={data.title}>
      <header className="flex justify-start items-center max-w-2xl mx-auto">
        <Link href="/">
          <a
            aria-label="Go back to the homepage"
            className="h-10 w-10 flex justify-center items-center rounded bg-black text-white"
          >
            <FaArrowLeft size={20} />
          </a>
        </Link>
      </header>

      <article className="flex flex-col justify-start items-start max-w-2xl mx-auto">
        <header className="mt-10">
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
            <p>{data.publishedAt}</p>
          </div>
        </header>

        <section className="w-full mt-10 prose">{children}</section>
      </article>
    </Page>
  );
};

export default Post;
