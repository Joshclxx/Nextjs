import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-1 relative z-30 py-5">
      <div className="max-w-[1440px] mx-auto flexBetween padding-container">
        <Link href="/">
          <Image src="/heebrew.png" alt="heebrew" width={244} height={199} />
        </Link>

        <ul className="hidden h-full gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-[#0A1647] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
