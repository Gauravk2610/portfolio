import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import { LinearProgress } from '@material-ui/core'
import { Link, YouTube } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';
import codingPerson from './codingPerson.json'
import DisplayLottie from './DisplayLottie';

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
        percentage: 90,
    },
    {
        title: 'Node Js',
        percentage: 90,
    },
    {
        title: 'Docker',
        percentage: 80,
    },
    {
        title: 'BigChainDB',
        percentage: 80,
    },
    {
        title: 'Hyperledger Fabric',
        percentage: 80,
    },
    {
        title: 'MongoDB',
        percentage: 90,
    },
    {
        title: 'PostgreSql',
        percentage: 85,
    },
    {
        title: 'Angular',
        percentage: 70,
    },
    {
        title: 'React Js',
        percentage: 70,
    },
]

const iconList = [
    {
        title: 'Python',
        icon: 'fab fa-python'
    },
    {
        title: 'Javascript',
        icon: 'fab fa-js'
    },
    {
        title: 'React',
        icon: 'fab fa-react'
    },
    {
        title: 'Angular',
        icon: 'fab fa-angular'
    },
    {
        title: 'Docker',
        icon: 'fab fa-docker'
    },
    {
        title: 'Blockchain',
        icon: 'fab fa-ethereum'
    },
    {
        title: 'Npm',
        icon: 'fab fa-npm'
    },
    {
        title: 'Database',
        icon: 'fas fa-database'
    },
]

const projectList = [
    {
        title: 'Hoopr',
        description: 'Hoopr: A music licensing platform',
        techStack: ["Node js", "angular", "postgresql", "Elasticsearch", "gtm", "imagekit", "ses"],
        link: 'https://hoopr.ai',
        linkName: 'hoopr.ai'
    },
    {
        title: 'Botlab',
        description: 'An algoithmic trading platform',
        techStack: ["Python", "streamlit", "pandas", "ta-lib", "docker"],
    },
    {
        title: 'KYEASY',
        description: 'KYEASY: Blockchain based video kyc platform',
        techStack: ["Node Js", "Hyperledger Fabric", "web socket", "nodemailer"],
    },
    {
        title: 'Healthchain',
        description: 'Healthchain :  blockchain based EHR system',
        techStack: ["Bigchaindb", "Node Js", "Express", "twillio"],
        ytblink: 'https://youtu.be/icc24YsjyvY'
    },
]

const tagline = ["Student","Software Engineer", "Tech Enthusiast", "Full Stack Developer"]

function Portfolio() {

    const [keyword, setKeyword] = useState("Student") 

    // update the keyword every 3 seconds using the tagline array
    useEffect(() => {

        let i = 0
        const interval = setInterval(() => {
            setKeyword(tagline[i])
            i = (i + 1) % tagline.length
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Container>
            <Main>
                <Home id='Home'>
                    <Text>
                        <h1>Hi !</h1>
                        <h1><Typewriter
                            options={{
                                strings: ["I'm Rahul Doshi"],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h1>
                        <Description>
                            <h3>A {keyword} Situated in Mumbai</h3>
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
                    <DisplayLottie animationData={codingPerson} />
                    {/* <Cards>
                        {cardData.map((data, index) => {
                            return (
                            <Card key={index}>
                                <img src={data.img} alt="" />
                                <h3>{data.title}</h3>
                            </Card>
                            )
                        })}
                    </Cards> */}
                </About>
                <TiltLine />
                <Skills id='Skills'>
                    <Banner>What I Do ?</Banner>
                    <TagLine>
                        <h3>
                            CRAZY FULL STACK, PYTHON & BLOCKCHAIN DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                        </h3>
                    </TagLine>
                    <TechStack>
                        {
                            iconList?.map((icon, index) => (
                                <div className='techstack__icon'>
                                    <i key={index} className={icon?.icon} />
                                    <div>{icon?.title}</div> 
                                </div>
                            ))
                        }
                    </TechStack>
                    <ProgressBar>
                        {skillList.map((skill, index) => {
                            return (
                                <Bar>
                                    <Fade left>
                                        <h3>{skill.title}</h3>
                                        <LinearProgress variant="determinate" value={skill.percentage} />
                                    </Fade>
                                </Bar>
                            )
                        })}
                    </ProgressBar>
                    {/* <img src="https://cdn.discordapp.com/attachments/745946162816614430/880531880506716170/Untitled_design.png" alt="" /> */}
                </Skills>
                <Education id='Education'>
                    <Box>
                        <h1>Education</h1>
                        <EducationCardWrap>
                            <EducationCard>
                                <img src="/acoe.jfif" alt="Atharva College Of Engineering" />
                                <div className="education__card">
                                    <div className="college__name">Atharva College Of Engineering</div>
                                    <h4 className="program__enrolled">Bacehlors in Information Technology</h4>
                                    <h4 className="program__status">2020-2023</h4>
                                </div>
                            </EducationCard>
                            <EducationCard>
                                <img src="/bhagubhai.jpg" alt="bhagubhai" />
                                <div className="education__card">
                                    <div className="college__name">Shri Bhagubhai Mafatlal Polytechnic</div>
                                    <h4 className="program__enrolled">Diploma in Information Technology</h4>
                                    <h4 className="program__status">2017-2020</h4>
                                </div>
                            </EducationCard>
                        </EducationCardWrap>
                    </Box>
                </Education>
                <Education id='Experience'>
                    <Box>
                        <h1>Experience</h1>
                        <EducationCardWrap>
                            <EducationCard>
                                <img src="/blackcurrant.jfif" alt="" />
                                <div className="education__card">
                                    <div className="college__name">Blackcurrant Labs</div>
                                    <h4 className="program__enrolled">Software Developer</h4>
                                    <h4 className="program__status">Jan22-Sep22</h4>
                                </div>
                            </EducationCard>
                            {/* <EducationCard>
                                <img src="https://sbmp.ac.in/Common/Uploads/HomeTemplate/Home_Home_logo1.JPG" alt="" />
                                <div className="education__card">
                                    <div className="college__name">Shri Bhagubhai Mafatlal Polytechnic</div>
                                    <h4 className="program__enrolled">Diploma in Information Technology</h4>
                                    <h4 className="program__status">2017-2020</h4>
                                </div>
                            </EducationCard> */}
                        </EducationCardWrap>
                    </Box>
                </Education>
                <Projects id='Projects'>
                    <ProjectTitle>Projects</ProjectTitle>
                    <ProjectContainer>
                        {
                            projectList?.map((project, index) => (
                                <ProjectCard key={index}>
                                    <PrTitle>{project.title}</PrTitle>
                                    <PrDesc>{project.description}</PrDesc>
                                    <PrTech>
                                        {
                                            project?.techStack?.map((tech, index) => (
                                                <span key={index}>{tech}</span>
                                            ))
                                        }
                                    </PrTech>
                                    <PrLinks>
                                        {
                                            project?.link &&
                                            <LinkWrap><Link fontSize={'24px'} /><a href={project.link} target='blank' >{project.linkName}</a></LinkWrap>
                                        }
                                        {
                                            project?.ytblink &&
                                            <LinkWrap><YouTube fontSize={'24px'} /><a href={project.ytblink} target='blank' >{project.ytblink}</a></LinkWrap>
                                        }
                                    </PrLinks>
                                </ProjectCard>
                            ))
                        }
                    </ProjectContainer>
                </Projects>
            </Main>
        </Container>
    )
}

export default Portfolio

const Container = styled.div`
    flex: 1;
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
    margin-left: 10%;
    @media(max-width: 380px) {
        font-size: 2.0em;
    }
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

    @media(max-width: 500px) {
        h1 {
            font-size: 3.0em;
        }

        p {
            font-size: 1.4em;
            width: 80%;
        }
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
    overflow: hidden;
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

    /* @media(max-width: 500px) {
        display: none;
    } */

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
    min-height: 60vh;
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
    @media(max-width: 500px) {
        h3 {
            font-size: 1.6em;
            width: 75%;
        }
    }
`

const TechStack = styled.div`
    margin-top: 42px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    .techstack__icon {
        text-align: center;
        i {
            font-size: 42px;
        }
    }
`

const ProgressBar = styled.div`
    display: flex;
    margin: 6% 0;
    flex-wrap: wrap;
    width: 100%;
`

const Bar = styled.div`
    margin: 14px 5%;
    width: 40%;
    min-width: 200px;

    h3 {
        margin-bottom: 4%;
    }

    .MuiLinearProgress-root {
        height: 12px;
        border-radius: 50px;
    }

    @media(max-width: 1000px) {
        width: 100%
    }
`

const Education = styled.section`
    color: white;
`

const Box = styled.div`
    margin: 10px;

    h1 {
        display: flex;
        justify-content: center;
        // margin: 10px;
        margin-top: 0%;
        font-size: 3.0em;
        font-weight: 500;
    }
`

const EducationCardWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 32px 0;

`

const EducationCard = styled.div`
    display: flex;
    margin: 32px 0;
    border-bottom: 4px solid white;
    padding: 26px;
    max-width: 460px;
    width: 100%;

    @media(max-width: 500px){
        flex-direction: column;
        align-items: center;
        img {
            margin-bottom: 32px;
        }
        .education__card {
            margin-left: 0;
            text-align: center;
        }
    }
    
    img {
        height: 140px;
        width: 140px;
        object-fit: contain;
        border-radius: 100%;
    }
    .education__card {
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        width: 100%;
        /* justify-content: center; */
    }
    .college__name {
        font-size: 1.6em;
        line-height: 32px;
        font-weight: 400;
    }
    .program__enrolled {
        margin: 6px 0;
        color: rgb(255, 255, 255, 0.8);
        font-size: 1.1em;
        line-height: 26px;
        font-weight: 300;
    }
    .program__status {
        color: rgb(255, 255, 255, 0.5   );
    }
`

const Projects = styled.section`
    display: flex;
    flex-direction:  column;
    color: white;
    margin: 10px;
`

const ProjectContainer = styled.div`
    margin: 32px 0;
    display: flex;
    gap: 32px 16px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const ProjectTitle = styled.h1`
    font-size: 3.0em;
    font-weight: 500;
    margin: 32px 0;
    text-align: center;
`

const ProjectCard = styled.div`
    padding: 16px 32px;
    cursor: pointer;
    max-width: 420px;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.2);
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: box-shadow ease-in-out 200ms ;
    }
`

const PrTitle = styled.div`
    font-size: 1.8em;
    margin-bottom: 6px;
`

const PrDesc = styled.div`
    font-size: 1.2em;
    font-weight: 600;
    color: gray;
    margin-bottom: 12px;
`

const PrTech = styled.div`
    display: flex;
    gap: 6px 12px;
    flex-wrap: wrap;

    span {
        background-color: #41729666;
        padding: 6px 10px;
        border-radius: 20px;
    }
`

const PrLinks = styled.div`
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;
`

const LinkWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    a {
        color: grey;
    }
`
