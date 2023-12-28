import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export const Maincontainer = ({ children }: Props) => {
  return <>{children}</>;
};
