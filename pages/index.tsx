import Head from 'next/head';
import Image from 'next/image';

import Page from '@/layouts/Page';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Pedro Fontoura</title>

        <meta
          name="description"
          content="Software Developer and Computer Science Student"
        />
      </Head>
      <main className="w-full max-w-3xl m-auto flex flex-col justify-center text-center">
        <div className="w-48 h-48 relative mx-auto mt-20">
          <Image
            alt="Pedro Fontoura"
            layout="fill"
            src="/avatar.png"
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mt-10">
          Hi, I&apos;m Pedro Fontoura.
        </h1>

        <p className="text-lg md:text-xl mt-10">
          I&apos;m a Computer Science student seeking professional experience to
          act in challenging environments, solving real-world problems using
          modern technologies.
        </p>

        <p className="text-lg md:text-xl mt-10">
          Currently working with <strong>TypeScript</strong>,{' '}
          <strong>Node.js</strong> and <strong>React</strong>.
        </p>
      </main>
    </Page>
  );
}
