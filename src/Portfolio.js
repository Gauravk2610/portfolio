import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import { LinearProgress } from '@material-ui/core'

const cardData = [
    {
        img: 'https://preview.colorlib.com/theme/robotics/img/xp4.png.pagespeed.ic.h4H27DKuGo.webp',
        title: 'Robotics'
    },
    {
        img: 'https://openclipart.org/image/2400px/svg_to_png/278132/Artificial-Intelligence.png',
        title: 'AI ML'
    },
]

const skillList = [
    {
        title: 'Python',
        percentage: 80,
    },
    {
        title: 'ROS',
        percentage: 76,
    },
]

function Portfolio() {

    return (
        <Container >
            <Main>
                <Home id='Home'>
                    <Text>
                        <h1>Hi !</h1>
                        <h1><Typewriter
                            options={{
                                strings: ["I'm Anonymous"],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h1>
                        <Description>
                            <h3>A Robotics Engineer Situated in Mumbai</h3>
                        </Description>
                    </Text>
                </Home>
                <br />
                <About id='About'>
                    <Title>About Me</Title>
                    <h1>Who am I ?</h1>
                    <AboutDescription>
                        <p>
                            A passionate Full Stack Software, Python & BlockChain Developer 🚀 having an experience of designing and building Web Applications with JavaScript / Reactjs and some other cool libraries and frameworks, also built some smart contracts, ERC20 tokens creation, some DeFi, and other cool stuffs. Also have worked on Django FrameWork And have Created some Awesome Projects 🔥
                        </p>
                    </AboutDescription>
                    <Cards>
                        {cardData.map((data, index) => {
                            return (
                            <Card key={index}>
                                <img src={data.img} alt="" />
                                <h3>{data.title}</h3>
                            </Card>
                            )
                        })}
                    </Cards>
                </About>
                <TiltLine />
                <Skills id='Skills'>
                    <Banner>What I Do ?</Banner>
                    <TagLine>
                        <h3>
                            CRAZY FULL STACK, PYTHON & BLOCKCHAIN DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                        </h3>
                    </TagLine>
                    <ProgressBar>
                        {skillList.map((skill, index) => {
                            return (
                                <Bar>
                                    <h3>{skill.title}</h3>
                                    <LinearProgress variant="determinate" value={skill.percentage} />
                                </Bar>
                            )
                        })}
                    </ProgressBar>
                    <img src="https://cdn.discordapp.com/attachments/745946162816614430/880531880506716170/Untitled_design.png" alt="" />
                </Skills>
                <Education id='Education'>
                    <Box>
                        <h1>Education</h1>
                    </Box>
                </Education>
            </Main>
        </Container>
    )
}

export default Portfolio

const Container = styled.div`
    flex: 0.8;
    background-color: #121212;
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    // position: relative;
    // flex: 1;
    // width: 100%;
`

const Home = styled.section`
    display: flex;
    min-height: 100vh;
    color: black;
    background-image: url('https://preview.colorlib.com/theme/jackson/images/ximg_bg_2.jpg.pagespeed.ic.xEiGUO7p7Q.webp');
    background-repeat: no-repeat;
    background-size: cover;
    // background-attachment: fixed;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    font-size: 3.0em;
    font-family: monospace;
    margin-left: 10%
`

const Description = styled.div`
    margin-top: 2%;
    max-width: 500px;   
    font-size: 0.8em;
    color: darkgrey;
`

const About = styled.section`
    display: flex;
    flex-direction: column;
    color: white;
    min-height: 100vh;
    // margin: 10% 0;
    // background-attachment: fixed;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5.0em;
        font-weight: 400;
        transition: letter-spacing 300ms ease-in-out;
        cursor: pointer;
    }

    h1:hover {
        letter-spacing: 8px;
    }

    p {
        font-size: 1.6em;
        display: flex;
        margin: 2% 0;
        width: 70%;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`

const Title = styled.div`
    display: flex;    
    margin-top: 10%;
    font-size: 2.0em;
    justify-content: center;
`

const AboutDescription = styled.div`
    display: flex;
    justify-content: center;
`

const Cards = styled.div`
    display: flex;
    margin: 6% 6%;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Card = styled.div`
    width: 220px;
    display: flex;
    margin: 2%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // border-radius: 10px;
    transition: box-shadow 500ms;
    border: 1px solid #323232;
    box-shadow: 0px 0px 6px 2px #323232;
    img {
        margin-top: 16px;
        object-fit: contain;
        height: 250px;
        width: 180px;
        transition: transform 500ms;
    }

    h3 {
        margin: 16px 0;
        transition: 500ms
    }

    :hover h3 {
        letter-spacing: 10px;
    }

    :hover img {
        transform: scale(1.05);
    }

    :hover {
        box-shadow: 0px 0px 18px 4px;
    }

`

const TiltLine = styled.div`
    height: 2px;
    background-color: white;
    // transform: skew(-4deg, -4deg);
    animation: App-logo-spin infinite 8s linear ;

    @keyframes App-logo-spin {
        0% {
          transform: rotate(4deg);

        }
        25% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-4deg);
        }
        75% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(4deg);
        }
    }

`

const Skills = styled.section`
    display: flex;
    flex-direction:  column;
    color: white;
    min-height: 100vh;
    margin: 10px;
    align-items:  center;
    img {
        animation: tech-spin infinite 20s linear;
        margin-top: 20px;
        width: 500px;
    }
    
    @keyframes tech-spin {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    }
`
const Banner = styled.div` 
    margin: 16px 0;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    font-size: 2.6em;
`

const TagLine = styled.div`
    display: flex;
    justify-content: center;
    
    h3 {
        width: 64%;
        text-align: center;
        font-weight: 500;
        font-size: 1.8em;
        color: grey;
    }
`

const ProgressBar = styled.div`
    display: flex;
    margin: 6% 0;
    flex-wrap: wrap;
    width: 100%;
`

const Bar = styled.div`
    margin: 4% 5%;
    width: 40%;
    min-width: 200px;

    h3 {
        margin-bottom: 4%;
    }

    .MuiLinearProgress-root {
        height: 6px;
        border-radius: 50px;
    }

    @media(max-width: 1000px) {
        width: 100%
    }
`

const Education = styled.section`
    color: white;
    min-height: 100vh;
`

const Box = styled.div`
    margin: 10px;

    h1 {
        display: flex;
        justify-content: center;
        // margin: 10px;
        margin-top: 4%;
        font-size: 3.0em;
        font-weight: 500;
    }
`