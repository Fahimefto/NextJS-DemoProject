import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const notFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>OPPSSSSSS......</h1>
      <h2>this page cannot be found</h2>
      <p>
        Go Back to to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default notFound;
