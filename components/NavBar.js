import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/donar">
        <a>Donar-list</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
