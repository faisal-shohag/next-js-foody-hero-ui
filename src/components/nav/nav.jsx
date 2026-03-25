// import { FaShoppingCart } from "react-icons/fa";
import ThemeSwitch from "../theme-switch";
// import { Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "./navlinks";
// import { auth, signOut } from "@/auth";
// import { Avatar } from "@heroui/react";
const NavBar = async () => {
  // const session = await auth();
  // const user = session?.user;
  //server action
  // const handleSignOut = async () => {
  //   "use server";
  //   await signOut();
  // };
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"}>
        {" "}
        <div className="text-[#e9422a] font-bold text-2xl">Foody</div>
      </Link>
      <NavLink /> {/* Client component */}
      <div className="flex  items-center">
        <ThemeSwitch />
        {/* {user ? (
          <div className="flex items-center gap-x-1.5">
            <Avatar>
              <Avatar.Image alt={user.name} src={user.image} />
              <Avatar.Fallback>{user.name.substr(0, 1)}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleSignOut} size="sm" variant="danger">
              Sign out
            </Button>
          </div>
        ) : (
          <Link href={"/auth/signin"}>
            <Button size="sm" variant="danger">
              Sign In
            </Button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default NavBar;
