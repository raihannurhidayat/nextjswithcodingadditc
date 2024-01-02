import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/prisma-example", label: "prisma" },
];

const Navbar = () => {
  return (
    <>
      <nav className="bg-base-300 py-2">
        <div className="navbar px-2 max-w-6xl mx-auto flex-col sm:flex-row">
          <Link href={`/`} className="btn btn-primary">
            Next.js
          </Link>
          <ul className="menu menu-horizontal md:ml-8 gap-2">
            {links.map((link, index) => {
              return (
                <li key={index} >
                  <Link href={link.href} className="capitalize ">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
