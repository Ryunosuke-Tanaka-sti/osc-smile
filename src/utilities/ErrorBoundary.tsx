import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

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
      <div className="flex flex-col gap-2 text-lg">エラー起きちゃった♡</div>
      <button className="rounded-md bg-red-500 px-10 py-2 text-white" onClick={resetErrorBoundary}>
        リトライ
      </button>
    </>
  );
};
