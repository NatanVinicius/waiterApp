interface Props {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export const CardGrid = ({ title, icon, children }: Props) => {
  return (
    <>
      <div className="p-4 border flex flex-col gap-6 border-black/20 rounded-md">
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold">{`${icon} ${title}`}</p>
          <div className="px-1.5  bg-black/3 rounded-sm">1</div>
        </div>
        {children}
      </div>
    </>
  );
};
