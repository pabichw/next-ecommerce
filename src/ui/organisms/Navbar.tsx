import ActiveLink from "@/ui/atoms/ActiveLink";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-neutral-100 shadow w-full p-5 flex align-center justify-center gap-8">
      <ActiveLink className="text-xs" activeClassName="text-red-600" href="/">
        Home
      </ActiveLink>
      <ActiveLink className="text-xs" activeClassName="text-red-600" href="/products" notExact>
        All
      </ActiveLink>
    </nav>
  );
}

export default Navbar;
