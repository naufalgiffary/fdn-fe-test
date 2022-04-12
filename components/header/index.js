import Link from "next/link";

const menu = [
  "SKINCARE",
  "MAKE UP",
  "BODY",
  "HAIR",
  "FRAGRANCE",
  "NAILS",
  "TOOLS",
  "BRANDS",
];

function NavLink({ to, children }) {
  return (
    <Link href={to}>
      <a className="font-bold text-sm whitespace-nowrap transitiom ease-in-out delay-150 hover:text-red hover:-translate-y-0.5 hover:scale-110 duration-200">
        {children}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <div>
      <div className="flex border-b-2 overflow-x-scroll flex-wrap items-center justify-center space-x-5 py-2 bg-white">
        {menu.map((item, idx) => (
          <NavLink key={idx} to="/contact">
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
