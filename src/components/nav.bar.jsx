import React from "react";
import {
  Navbar,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { NyAinaLogo } from "./nyaina.logo";
import SelectLang from "./select.lang";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [t, i18n] = useTranslation("global");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    t("headers.menu.1"),
    t("headers.menu.2"),
    t("headers.menu.3"),
    t("headers.menu.4"),
    t("headers.menu.5"),
  ];

  const navigateTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Navbar
      maxWidth="full"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent justify="start">
        <div className="flex flex-row items-start">
          <NyAinaLogo />
          <p className="font-semibold text-inherit">admiel</p>
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link>
              <nav className="text-primary">#</nav>
              <nav className="text-foreground cursor-pointer">
                <p onClick={() => navigateTo(item)}>{item}</p>
              </nav>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <SelectLang />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              <nav className="text-primary">#</nav>
              <nav className="text-foreground">
                <p onClick={() => navigateTo(item)}>{item}</p>
              </nav>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
