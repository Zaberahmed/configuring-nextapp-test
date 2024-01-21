import NavLinks from "@components/nav-links";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const PrivateRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <nav className="flex justify-between">
        <NavLinks />
        <div className="flex justify-end items-center gap-5 p-2">
          <p>Toggle theme</p>
          <Flowbite>
            <DarkThemeToggle className="border border-gray-500 dark:border-white" />
          </Flowbite>
        </div>
      </nav>
      {children}
    </main>
  );
};

export default PrivateRoutesLayout;
