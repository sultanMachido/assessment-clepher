import { ReactNode, Suspense } from "react";

type LazyLoadProps = {
  children: ReactNode;
  index: number;
  currentIndex: number;
};

const LazyLoad = ({ children, index, currentIndex }: LazyLoadProps) => {
  if (currentIndex !== index) {
    return null;
  }
  return <Suspense fallback={<p>loading...</p>}>{children}</Suspense>;
};

export default LazyLoad;
