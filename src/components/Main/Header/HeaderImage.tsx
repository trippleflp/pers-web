import style from './transition.module.css';
/** @jsx jsx */
import { jsx, SxProps, SxStyleProp } from "theme-ui";

export default function HeaderImage({ src, height, animationName, duration, top, right}) {

    const headerImageContainerSx: SxStyleProp = {
        // height: height,
        // boxShadow: theme => `30px 35px 1px 0px ${theme.colors.primary}`,
        position: "absolute",
        animation: theme => `${duration}s ease-out 0s`,
        animationName: style[animationName],
        filter: 'drop-shadow(-4px 10px 5px #000000)',


        top,
        right
        // ":after": {
        //     content: '""',
        //     display: 'block',
        //     bg: 'primary',
        //     transform: 'translate(35px, 30px)'
        // },
    }

    const headerImgSx: SxStyleProp = {
        height,
        zIndex: 2,
        position: "relative",
        filter: 'drop-shadow(2px 3px 11px #000000)',
    }

    const headerImageShadowSx: SxStyleProp = {
        p: '0',
        m: '0',
        display: 'block',
        position: "absolute",
        height: '100%',
        width: '100%',
        top: 0,
        bg: 'primary',
        transform: 'translate(35px, 30px)'
    }

    return (
        <>
            <div sx={{ ...headerImageContainerSx }}>
                <div sx={{ ...headerImageShadowSx }} />
                <img src={src} sx={{ ...headerImgSx }} />
            </div>
        </>
    )
}

