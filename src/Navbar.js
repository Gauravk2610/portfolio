import { Avatar } from "@material-ui/core";
import {
  BarChart,
  Contacts,
  Home,
  Laptop,
  Person,
  Phonelink,
  School,
  MenuBook,
  EmojiEvents
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const menuList = [
  {
    title: "Home",
    icon: <Home />,
  },
  {
    title: "About",
    icon: <Person />,
  },
  {
    title: "Skills",
    icon: <Laptop />,
  },
  {
    title: "Education",
    icon: <School />,
  },
  {
    title: "Experience",
    icon: <BarChart />,
  },
  {
    title: "Work",
    icon: <Phonelink />,
  },
  // {
  //   title: "Certification",
  //   icon: <EmojiEvents />,
  // },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(false);
  const navUpdate = () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    const { pageYOffset } = window;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
        setActive(current);
      }
    });
  };

  useEffect(() => {
    navUpdate();
    window.addEventListener("scroll", navUpdate);
    return () => {
      window.removeEventListener("scroll", navUpdate);
    };
  }, []);

  return (
    <>
      <NavbarSpace active={show} />
      <MenuButton onClick={() => setShow(true)} active={show}>
        Menu <img src="menusmall.png" alt="menu" />
      </MenuButton>
      <Container active={show}>
        <Main>
          <Cross onClick={() => setShow(false)} src="cross.png" />
          <UserProfile>
            <Avatar src="/me.jpeg" />
            <h2>Rahul Doshi</h2>
            <p>Software Engineer</p>
            <div style={{
              display: 'flex',
              margin: '10px 0px',
            }}>
              <a href="https://leetcode.com/rahuldoshi34/"
              target={'_blank'}
              noreferrer="true"
              >
                <img 
                height={30}
                width={30}
                style={{
                  background: 'white',
                  borderRadius: '50%',
                }}
                src="https://leetcode.com/static/images/LeetCode_logo.png"
                />
              </a>
            </div>
          </UserProfile>
          <Menu>
            {menuList.map((list, index) => {
              return (
                <Content
                  key={index}
                  active={active === list.title}
                  onClick={() => {
                    setActive(list.title);
                    setShow(false);
                  }}
                >
                  {list.icon}
                  <a href={`#${list.title}`}>
                    <p>{list.title}</p>
                  </a>
                </Content>
              );
            })}
            <Content>
                <EmojiEvents />
              <a 
              href={"https://drive.google.com/drive/folders/1AyKl3ONUbQsClh2Z3pLWP9VuDn7gfU6m?usp=sharing" }
              target={'_blank'}>
                <p>Certifications</p>
              </a>
            </Content>
            <Content>
                <MenuBook />
              <a 
              href={"https://drive.google.com/file/d/14lqoZK48_LSrcSEs0gPFqSgv_zw0_nFs/view?usp=sharing" }
              target={'_blank'}>
                <p>Resume</p>
              </a>
            </Content>
          </Menu>
        </Main>
      </Container>
    </>
  );
}

export default Navbar;

const NavbarSpace = styled.div`
  width: 18%;
  flex: 0.2;
  min-width: 300px;
  @media (max-width: 950px) {
    flex: 0;
    min-width: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
  }
`;
const Container = styled.div`
  flex: 0.2;
  background-color: black;
  color: white;
  min-width: 300px;
  width: 20%;
  overflow-y: scroll;
  position: fixed;
  z-index: 100;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 950px) {
    /* display: none; */
    min-width: ${(props) => (props.active ? "100%" : "100%")};
    width: ${(props) => (props.active ? "100%" : "100%")};
    flex: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    position: fixed;
    background-color: black;
    z-index: 10;
    transform: ${(props) =>
      props.active ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 0.4s ease-in-out;
  }
`;

const MenuButton = styled.div`
  position: fixed;
  z-index: 100;
  cursor: pointer;
  top: 16px;
  width: 120px;
  height: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgb(0, 0, 0, 0.9);
  box-shadow: ${(props) => (props.active ? "none" : "0px 0px 5px 2px")};
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-evenly;
  color: white;
  transform: ${(props) =>
    props.active ? "translateX(-100%)" : "translateX(0%)"};
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
`;

const Cross = styled.img`
  display: none;
  @media (max-width: 950px) {
    display: flex;
    position: absolute;
    right: 32px;
    top: -10px;
    width: 36px;
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  position: relative;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .MuiAvatar-root {
    width: 150px;
    height: 150px;
  }

  h2 {
    margin-top: 6px;
  }

  p {
    color: grey;
    margin: 4px;
  }
`;

const Menu = styled.div`
  margin: 16px 20px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  margin: 2px 0;
  padding: 10px 16px;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? "#282828" : "")};
  cursor: pointer;
  color: ${(props) => (props.active ? "#white" : "#b3b3b3")};
  display: flex;
  align-items: center;
  font-size: 16px;
  transition: background-color 200ms ease-in-out;

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0px")};
    height: 8%;
    background-color: #484848;
    border-radius: 6px;
    transition: width 0.5s, height 0.5s, left 0.5s;
  }

  :hover::before {
    left: 0;
    width: ${(props) => (props.active ? "" : "100%")};
    height: ${(props) => (props.active ? "" : "8%")};
  }

  :hover {
    color: ${(props) => (props.active ? "" : "white")};
    transition: color 200ms ease-in-out;
  }

  .MuiSvgIcon-root {
    margin-right: 8px;
    z-index: 2;
  }
  p {
    width: 100%;
  }
  a {
    display: flex;
    width: 100%;
    text-decoration: none;
    color: inherit;
    z-index: 2;
  }

  a:hover {
  }
`;
