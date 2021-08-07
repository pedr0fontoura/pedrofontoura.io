import Head from 'next/head';

import Footer from '@/components/Footer';

interface IProps {
  title?: string;
  description?: string;
}

const Page: React.FunctionComponent<IProps> = ({ children, ...customMeta }) => {
  const defaultMeta = {
    title: 'Pedro Fontoura',
    description: 'Software Developer and Computer Science Student'
  };

  const meta = { ...defaultMeta, ...customMeta };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="w-full h-screen p-2 md:p-5 md:pb-0 flex flex-col">
        <div className="flex-grow overflow-y-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
