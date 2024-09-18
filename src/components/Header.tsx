import { Link, useLocation } from "react-router-dom";
import logoLabs from "../../public/novity-labs.png";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <img src={logoLabs} alt="logo" className="w-auto h-10" />
      </Link>
      <form className="">
        <TextInput
          type="text"
          placeholder="Search"
          className="w-64 hidden lg:inline"
          icon={AiOutlineSearch}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10" color="gray" pill>
          <FaSun />
        </Button>

        <Link to="/signin" className="">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/tutorials"} as={"div"}>
          <Link to="/tutorials">Tutorials</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/add"} as={"div"}>
          <Link to="/add">New tutorial</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
