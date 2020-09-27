/** @jsx jsx */
import { Card, jsx, SxStyleProp } from "theme-ui";
import style from './transition.module.css';
import headerImage1 from './assets/Header-1.jpg';
import headerImage2 from './assets/Header-2.jpg';
import HeaderImage from "./HeaderImage";

export default function Header() {
    return (
        <>
            <header className="header" sx={{
                height: '75vh',
                bg: 'background',
                backgroundImage: 'radial-gradient(ellipse at bottom,#40262788, transparent 80%)',
                position: 'relative',
            }}>
                <div sx={{
                    position: "absolute",
                    top: "30%",
                    left: '10%',
                }}>
                    <h1 sx={{ ...headTransition, fontSize: "65px" }}>Florian Gebele</h1>
                    <p sx={{ ...subTransition, ml: "30px", fontSize: "35px" }}><b sx={{color:'primary'}}>Next Generation </b>Software Engineering Expert</p>
                </div>

                    <HeaderImage animationName={'headOneTransition'} src={headerImage1} height={500} duration={30} top={'12%'} right={'7%'}/>
                    <HeaderImage animationName={'headTwoTransition'} src={headerImage2} height={350} duration={30} top={'40%'} right={'21%'}/>
            </header>

        </>
    )
}

const headTransition: SxStyleProp = {
    animation: '45s ease-out 0s',
    animationName: style.slideInFromLeft
}

const subTransition: SxStyleProp = {
    animation: '30s ease-out 0s',
    animationName: style.slideInFromLeft,
}

