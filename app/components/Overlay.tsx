import { ReactNode } from "react";
import { useDashboardContext } from "../context/dashboard.content.provider";

export default function Overlay({ children }: { children: ReactNode }) {
  const { isPending, error } = useDashboardContext();
  if (isPending) {
    return <>loading . . . </>;
  } else if (error) {
    return <>error</>;
  }
  return <>{children}</>;
}
