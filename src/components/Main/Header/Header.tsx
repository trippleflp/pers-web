/** @jsx jsx */
import { Card, jsx } from "theme-ui";

export default function Header() {
    return (
        <>
            <header sx={{
                height: '75vh'
            }}>
                <h1 sx={{textAlign: "center", fontFamily: 'heading', }}>Hallo</h1>
            </header>
        </>
    )
}