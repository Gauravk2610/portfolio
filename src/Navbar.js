import { Avatar } from '@material-ui/core'
import { BarChart, Contacts, Home, Laptop, Person, Phonelink, School } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const menuList = [
    {
        title: 'Home',
        icon: <Home />
    },
    {
        title: 'About',
        icon: <Person />
    },
    {
        title: 'Skills',
        icon: <Laptop />
    },
    {
        title: 'Education',
        icon: <School />
    },
    {
        title: 'Experience',
        icon: <BarChart />
    },
    {
        title: 'Work',
        icon: <Phonelink />
    },
    {
        title: 'Contact',
        icon: <Contacts />
    },
]

function Navbar() {

    const [active, setActive] = useState('Home')

    const navUpdate = () => {
        let current = ""
        const sections = document.querySelectorAll('section')
        const { pageYOffset } = window;

        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= (sectionTop - sectionHeight/2 )) {
                current = section.getAttribute('id')
                setActive(current)
            }
        } )

    }

    useEffect(() => {
        navUpdate();
        window.addEventListener('scroll', navUpdate)
        return () => {
            window.removeEventListener('scroll', navUpdate)
        }
    }, [])

    return (
        <Container>
            <Main>
                <UserProfile>
                    <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                    <h2>Anonymous</h2>
                    <p>Robotics Engineer in Mumbai</p>
                </UserProfile>
                <Menu>
                    { menuList.map(( list, index ) => {
                        return (
                            <Content 
                                key={index}
                                active={active===list.title}
                                onClick={() => {setActive(list.title)}}
                            >
                                {list.icon}
                                <a href={`#${list.title}`}><p>{list.title}</p></a>
                            </Content>
                        )
                    }) }
                </Menu>
            </Main>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    flex: 0.2;
    background-color: black;
    color: white;
    min-width: 300px;
    width: 20%;
    overflow-y: scroll;   
    position: fixed;    
    height: 100%;
    ::-webkit-scrollbar {
        display: none;
    }

`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10%;
`

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

`

const Menu = styled.div`
    margin: 16px 20px;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    position: relative;
    margin: 2px 0;
    padding: 10px 16px;
    border-radius: 6px;
    background-color: ${props => props.active ?'#282828':''};
    cursor: pointer;
    color: ${props => props.active ?'#white':'#b3b3b3'};
    display: flex;
    align-items: center;
    font-size: 16px;
    transition: background-color 200ms ease-in-out;

    ::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${props => props.active? '100%': '0px'};
        height: 8%;
        background-color: #484848;
        border-radius: 6px;
        transition: width 0.5s, height 0.5s, left 0.5s;
    }

    :hover::before {
        left: 0;
        width: ${props => props.active? '': '100%'};
        height: ${props => props.active? '': '8%'};
    }

    :hover {
        color: ${props => props.active ?'':'white'};
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

`