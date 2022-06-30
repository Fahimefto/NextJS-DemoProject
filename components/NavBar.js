import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/demologo1.png" width={200} height={120} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/donor">
        <a>Donor-list</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
