import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  classname: string[];
}
const Maincontainer = ({ children }: Props) => {
  return <>{children}</>;
};

export default Maincontainer;
