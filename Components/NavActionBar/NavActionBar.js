import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import DeleteConfirmationModal from "../DeleteConfirmation/DeleteConfirmationModal";
import BookMark from "../BookMark/BookMark";

import Details from "@/src/icons/plant-svgrepo-com.svg";
import Add from "@/src/icons/add-circle-svgrepo-com.svg";
import Edit from "@/src/icons/edit-2-svgrepo-com.svg";
import Delete from "@/src/icons/delete-1-svgrepo-com.svg";
import List from "@/src/icons/reorder-svgrepo-com.svg";
import Back from "@/src/icons/arrow-partial-rotate-left-svgrepo-com.svg";
import Bookmark from "@/src/icons/leaf-svgrepo-com.svg";

export default function NavActionBar({
  onShowForm,
  plantId,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
}) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <NavbarSpacer />

      <Nav>
        <NavSection>
          <Styled_Link $active={pathname === "/"} href="/">
            <IconWrapper_Navbar $variant={pathname === "/" ? "active" : null}>
              {pathname === "/" && <Icon_List />}
              {pathname !== "/" && <Icon_Back />}
            </IconWrapper_Navbar>
          </Styled_Link>

          <Styled_PageLinkDummy
            $active={pathname === "/plant-details/[id]"}
            href="/"
          >
            <IconWrapper_Navbar
              $variant={
                pathname === "/plant-details/[id]" ? "active" : "greyed-out"
              }
              $noHover
            >
              <Icon_Details />
            </IconWrapper_Navbar>
          </Styled_PageLinkDummy>
          <Styled_Link
            $active={pathname === "/bookmarks.js"}
            href="/bookmarks/bookmarks"
          >
            <IconWrapper_Navbar
              $variant={pathname === "/bookmarks/bookmarks" ? "active" : null}
            >
              <Icon_Bookmark />
            </IconWrapper_Navbar>
          </Styled_Link>
        </NavSection>

        {pathname === "/" && (
          <NavSection>
            <Button aria-label="add new plant" onClick={onShowForm}>
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
                <Icon_Edit aria-label="edit plant" onClick={onShowForm} />
              </IconWrapper_Navbar>
            </Button>

            <DeleteConfirmationModal plantId={plantId}>
              <IconWrapper_Navbar>
                <Icon_Delete />
              </IconWrapper_Navbar>
            </DeleteConfirmationModal>

            <BookMark
              onToggleBookmarkPlant={handleToggleBookmarkPlant}
              bookmarkedPlants={bookmarkedPlants}
              plantId={plantId}
            />
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

  cursor: pointer;
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

const Styled_PageLinkDummy = styled.div`
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

//---< Icon-Wrapping >---------------------------------------------------------------

const iconSize = "80%";

const IconWrapper_Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navbarHeight};
  width: ${(props) => (props.$double ? "75px" : null)};

  &:hover {
    color: ${(props) => (!props.$noHover ? "rgb(106, 201, 157)" : null)};
    background-color: transparent;
  }

  color: ${(props) => {
    if (props.$variant === "active") return "rgb(23, 196, 115)";
    else if (props.$variant === "greyed-out") return "rgb(194, 194, 194)";
    else return "inherit";
  }};
`;

//---< Icons-BaseSettings >---------------------------------------------------------------

const Icon_Details = styled(Details)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;
  stroke: currentColor;
`;

const Icon_Add = styled(Add)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;
  stroke: none;
`;

const Icon_Edit = styled(Edit)`
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

const Icon_Back = styled(Back)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;
  fill: currentColor;
  stroke: none;
`;

const Icon_Bookmark = styled(Bookmark)`
  position: relative;
  width: auto;
  height: ${iconSize};
  display: block;
  fill: currentColor;
  stroke: none;
`;
