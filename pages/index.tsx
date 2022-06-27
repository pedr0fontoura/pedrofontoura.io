import Image from 'next/image';
import { GetStaticProps } from 'next';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

import Page from '@/components/Page';
import BlogPostList from '@/components/BlogPostList';

interface IProps {
  posts: Blog[];
}

const Home = ({ posts }: IProps) => {
  return (
    <Page>
      <main className="w-full max-w-3xl m-auto flex flex-col justify-center items-center text-center">
        <div className="w-48 h-48 relative mx-auto mt-20">
          <Image
            alt="Pedro Fontoura"
            layout="fill"
            src="/avatar.png"
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight mt-10">
          Hi, I&apos;m Pedro Fontoura
        </h1>

        <p className="text-lg md:text-xl mt-10">
          I&apos;m a software developer focused on creating multiplayer gaming
          experiences.
        </p>

        <p className="text-lg md:text-xl mt-10">
          Delivering high-quality products for players and providing a great
          developer experience for my teammates is what drives me. I&apos;m also
          an open-sorcerer and game modding enthusiast.
        </p>

        <p className="text-lg md:text-xl mt-10">
          Currently working with <strong>TypeScript</strong>,{' '}
          <strong>Node.js</strong> and <strong>React</strong>.
        </p>

        <a
          href="https://www.linkedin.com/in/pffrd/"
          className="w-40 text-lg md:text-xl mt-10 font-normal rounded hover:underline"
        >
          👋 Get in touch!
        </a>

        <BlogPostList posts={posts} />
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return { props: { posts: allBlogs } };
};

export default Home;
