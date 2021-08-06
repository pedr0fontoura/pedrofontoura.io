import Footer from '@/components/Footer';

const Page: React.FunctionComponent = ({ children }) => {
  return (
    <div className="w-full h-screen p-5 pb-0 flex flex-col">
      <div className="flex-grow overflow-y-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
