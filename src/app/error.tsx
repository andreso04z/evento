"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      {/* <H1 className="mb-5">Something went wrong!</H1> */}
      <H1>Something went wrong!</H1>
      <Link href="/">Try again</Link>
    </main>
  );
}
