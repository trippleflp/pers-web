
import { useState } from "react";
/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

export default function Navigation({ light, toggle }) {

    console.log(light);
    
    const getTheme = () => light?lightSx:darkSx;

    return (
        <div onChange={toggle} sx={{...baseSx,...getTheme()}}>
            <p>LOL</p>
        </div>
    );
}

const baseSx: SxStyleProp = {

    position: 'sticky',
    top: 0,
    height: '60px',
    zIndex: 2

}

const lightSx: SxStyleProp = {
    bg: 'accent',

    borderBottom: theme => `1px solid ${theme.colors.background}`,
}

const darkSx: SxStyleProp = {

    bg: 'background',

    borderBottom: theme => `1px solid ${theme.colors.accent}`,
}

