import { VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { IoIosCloudOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const menuOptions = [
  "UtkarshDhairyaPanwar",
  "Hvch asdj JKhhf sdjh fbsd",
  "Uvhjsfdjks fjslk dfns",
];

function NavMenu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    "UtkarshDhairyaPanwar"
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuRoot open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <MenuTrigger
          className="dropdown-btn"
          marginBottom={{ base: "20px", md: "0" }}
          width="100%"
        >
          <span>{selectedMenuItem}</span>{" "}
          {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
        </MenuTrigger>
        <MenuContent
          gap={5}
          backgroundColor="var(--main-bg-color)"
          zIndex={100000}
        >
          {menuOptions.map((e) => (
            <MenuItem
              _hover={{
                backgroundColor: "#e5e5e5",
              }}
              color="var(--text-color)"
              cursor="pointer"
              key={e}
              value={e}
              onClick={() => setSelectedMenuItem(e)}
            >
              {e}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
      <div className="sidenav-menu">
        <VStack width="100%">
          <NavLink
            to={"/repositories"}
            className={(e) =>
              e.isActive ? "sidenav-link active-link" : "sidenav-link"
            }
          >
            <AiOutlineHome /> Repositories
          </NavLink>
          <NavLink
            to={"/ai-code-review"}
            className={(e) =>
              e.isActive ? "sidenav-link active-link" : "sidenav-link"
            }
          >
            <FaCode /> AI Code Review
          </NavLink>
          <NavLink
            to={"/cloud-security"}
            className={(e) =>
              e.isActive ? "sidenav-link active-link" : "sidenav-link"
            }
          >
            <IoIosCloudOutline /> Cloud Security
          </NavLink>
          <NavLink
            to={"/how-to-use"}
            className={(e) =>
              e.isActive ? "sidenav-link active-link" : "sidenav-link"
            }
          >
            <LuBookText /> How to Use
          </NavLink>
          <NavLink
            to={"/settings"}
            className={(e) =>
              e.isActive ? "sidenav-link active-link" : "sidenav-link"
            }
          >
            <IoSettingsOutline /> Settings
          </NavLink>
        </VStack>

        <VStack width="100%">
          <NavLink
            to={"/how-to-use"}
            className={(e) =>
              e.isActive ? "sidenav-link active-link" : "sidenav-link"
            }
          >
            <FiPhone /> Support
          </NavLink>
          <button className="sidenav-link">
            <FiLogOut size="24px" /> Logout
          </button>
        </VStack>
      </div>
    </>
  );
}

export default NavMenu;
