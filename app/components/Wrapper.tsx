interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div className={`mx-auto max-w-[1240px] border-x border-slate-200 ${className}`}>
      {children}
    </div>
  );
}
