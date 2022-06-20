import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from '@/components/Footer';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

const Page = ({ children, ...customMeta }: Props) => {
  const router = useRouter();

  const meta = {
    title: 'Pedro Fontoura',
    description: 'Software developer and game modding enthusiast',
    image: 'https://pedrofontoura.io/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://pedrofontoura.io${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://pedrofontoura.io${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Pedro Fontoura" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pedr0fontoura" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="w-full h-screen p-2 md:p-5 md:pb-0 flex flex-col">
        <div className="flex-grow overflow-y-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
