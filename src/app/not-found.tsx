import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-9xl font-bold text-bmes-blue-200 mb-2">404</p>
      <h1 className="text-3xl font-light mb-2">Page Not Found</h1>
      <Link
            href="/"
            className="bg-bmes-blue-300 rounded-2xl px-4 py-2 text-white shadow-lg"
      >
        Return Home</Link>
    </div>
  );
};

export default NotFound;
