import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppFrame({ children }: Props) {
  return (
    <div className="min-h-dvh  w-full bg-white">
      <div className="mx-auto min-h-dvh w-full max-w-[390px] bg-white">
        {children}
      </div>
    </div>
  );
}
