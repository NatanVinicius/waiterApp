interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="relative ml-27 flex-1 p-10 bg-[#fafafa]">{children}</div>
  );
};
