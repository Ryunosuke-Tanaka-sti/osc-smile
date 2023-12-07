import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { Button } from '@/components/modules/Button';

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  return (
    <>
      <main className="flex w-full max-w-6xl grow flex-col items-center justify-center gap-3">
        <div className="flex flex-col gap-2 text-2xl md:text-6xl">エラー起きちゃった♡</div>
        <Button text="リトライ" onClick={resetErrorBoundary} />
      </main>
    </>
  );
};
