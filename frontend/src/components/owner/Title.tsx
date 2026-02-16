type PropType = {
  title: string;
  subtitle: string;
};

export default function Title({ title, subtitle }: PropType) {
  return (
    <>
      <h1 className="font-medium text-3xl">{title}</h1>
      <p className="text-sm md:text-base text-gray-900/90 mt-2 max-w-[624px]">
        {subtitle}
      </p>
    </>
  );
}
