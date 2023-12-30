import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Maincontainer = ({ children }: Props) => {
  return <>{children}</>;
};

export default Maincontainer;
