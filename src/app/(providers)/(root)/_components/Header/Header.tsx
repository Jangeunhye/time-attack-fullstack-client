import Link from "next/link";
import HeaderCategory from "./components/HeaderCategory";
import HeaderMenu from "./components/HeaderMenu";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-40 lg:px-48 z-10 ">
      <Link
        href="/"
        className="font-bold text-3xl font-['Giants-Bold']  text-[#2b1e8e]"
      >
        중고 마켓
      </Link>
      <nav className="ml-20 flex flex-1">
        <HeaderCategory />
        <HeaderMenu />
      </nav>
    </header>
  );
}

export default Header;
