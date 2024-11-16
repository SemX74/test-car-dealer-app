import Button from "@/shared/ui/common/Button";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="text-center py-4 text-xl font-bold border-b">
      <div className="container flex justify-between items-center">
        <h1>Car Dealer App</h1>
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
