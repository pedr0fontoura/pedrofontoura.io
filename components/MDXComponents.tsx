import Image from 'next/image';

type ImageProps = React.ComponentProps<typeof Image>;

const RoundedImage = (props: ImageProps) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

export const MDXComponents = {
  Image: RoundedImage
};
