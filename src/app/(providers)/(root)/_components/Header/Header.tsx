import Link from "next/link";
import HeaderMenu from "./components/HeaderMenu";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-40 lg:px-48 z-10 ">
      <Link href="/" className="font-bold text-2xl">
        중고마켓
      </Link>
      <nav className="ml-20 flex flex-1">
        <ul className="text-[15px] font-medium flex gap-4">
          <li>
            <Link href="/">구입하기</Link>
          </li>
          <li>
            <Link href="/deals/create">판매하기</Link>
          </li>
          <li>
            <Link href="/my/deals">내 판매글</Link>
          </li>
        </ul>
        <HeaderMenu />
      </nav>
    </header>
  );
}

export default Header;
