import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
const navLinks = [
  {
    href: "/login",
    text: "login",
  },
  {
    href: "/register",
    text: "Register",
  },
  {
    href: "/",
    text: "Home",
  },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              background: "#f4f4f4",
              borderBottom: "1px solid #ccc",
              color: "#ff6347",
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "1rem",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    style={{ textDecoration: "none", color: "#ff6347" }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
