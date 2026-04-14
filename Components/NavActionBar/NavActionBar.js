import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";

import Lotus1 from "@/src/icons/lotus-1-svgrepo-com.svg";
import Add from "@/src/icons/add-circle-svgrepo-com.svg";
import Edit from "@/src/icons/edit-2-svgrepo-com.svg";
import User from "@/src/icons/user-svgrepo-com.svg";
import Delete from "@/src/icons/delete-1-svgrepo-com.svg";
import Back from "@/src/icons/backward-svgrepo-com.svg";
import List from "@/src/icons/list-ul-alt-svgrepo-com.svg";

import NavbarPath from "@/src/paths/plantpal-navbar.svg";

export default function NavActionBar({ onShowForm }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <NavbarSpacer />

      <Nav>
        <NavSection>
          <Styled_Link $active={pathname === "/"} href="/">
            <IconWrapper_Navbar $variant={pathname === "/" ? "active" : null}>
              <Icon_List />
            </IconWrapper_Navbar>
          </Styled_Link>

          <Styled_Link $active={pathname === "/plant-details/[id]"} href="/">
            <IconWrapper_Navbar
              $variant={pathname === "/plant-details/[id]" ? "active" : null}
            >
              <Icon_Lotus />
            </IconWrapper_Navbar>
          </Styled_Link>
          <Styled_Link $active={pathname === "user profile"} href=".">
            <IconWrapper_Navbar
              $variant={pathname === "user profile" ? "active" : null}
            >
              <Icon_User />
            </IconWrapper_Navbar>
          </Styled_Link>
        </NavSection>

        {pathname === "/" && (
          <NavSection>
            <Button onClick={onShowForm}>
              <IconWrapper_Navbar $double>
                <Icon_Add />
              </IconWrapper_Navbar>
            </Button>
          </NavSection>
        )}
        {pathname === "/plant-details/[id]" && (
          <NavSection>
            <Button>
              <IconWrapper_Navbar>
                <Icon_Edit />
              </IconWrapper_Navbar>
            </Button>
            <Button>
              <IconWrapper_Navbar>
                <Icon_Delete />
              </IconWrapper_Navbar>
            </Button>
          </NavSection>
        )}
      </Nav>
    </>
  );
}

const navbarHeight = "40px";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: fit-content;

  justify-content: space-between;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const NavSection = styled.section`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  gap: 3px;
  background-color: rgb(224, 224, 224);
  padding-left: 10px;
  padding-right: 10px;
`;

const NavbarSpacer = styled.div`
  padding-bottom: ${navbarHeight};
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  border: none;
  color: inherit;
  background-color: transparent;

  &:hover {
    color: rgb(106, 201, 157);
    background-color: transparent;
  }
`;

const Styled_Link = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  color: rgb(0, 0, 0);

  &:hover {
    color: rgb(106, 201, 157);
  }

  &::after {
    content: "";
    position: absolute;

    left: 10%;
    right: 10%;
    bottom: 3px;

    height: 3px;
    border-radius: 2px;
    background: rgb(23, 196, 115);
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});

    transform-origin: center;
    transition: transform 0.2s ease;
  }
`;

const LinkText = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

//---< Icons >---------------------------------------------------------------

const iconSize = "80%";

const IconWrapper_Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navbarHeight};
  width: ${(props) => {
    props.$double ? "2flex" : "1flex";
  }};

  color: ${(props) => {
    if (props.$variant === "active") return "rgb(23, 196, 115)";
    else return "inherit";
  }};
`;

const IconSpacer = styled.div`
  width: 2px;
`;

const Icon_Lotus = styled(Lotus1)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

const Icon_Add = styled(Add)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

const Icon_Edit = styled(Edit)`
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

const Icon_Back = styled(Back)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

const Icon_User = styled(User)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

const Icon_List = styled(List)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

const Icon_Delete = styled(Delete)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;

  fill: currentColor;
  stroke: none;
`;

//---< Paths >---------------------------------------------------------------

const Styled_NavbarPath = styled(NavbarPath)`
  width: auto;
  height: 50px;
  display: block;
  color: red;
  fill: rgb(221, 221, 221);
  stroke: rgb(82, 82, 82);
  stroke-width: 2;
  bottom: 0;
`;
