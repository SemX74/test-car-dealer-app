import { FC } from "react";

const LoadingPage: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-2 border-transparent border-b-white" />
    </main>
  );
};

export default LoadingPage;
