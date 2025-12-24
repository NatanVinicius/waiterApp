interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="relative ml-27">{children}</div>;
};
