import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "./App";

function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-[35px] font-semibold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-700">
        <i>{error.statusText ?? error.message}</i>
      </p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <p className="text-[35px] text-gray-700">404 NOT FOUND</p>
        <p className="text-lg text-gray-500">Page is not available</p>
      </div>
    </div>
  );
}

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
