import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Maincontainer = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Maincontainer;
