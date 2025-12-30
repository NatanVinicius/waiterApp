interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="relative ml-27 p-10 bg-[#fafafa]">{children}</div>;
};
