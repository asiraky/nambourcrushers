import React from "react";
import Link from "next/link"

const Nav = ({ }) => {
    return (
        <nav>
            <Link href="/">News</Link><br />
            <Link href="/fixtures">Fixtures</Link><br />
            <Link href="/events">Events</Link><br />
            <Link href="/contact">Contact</Link><br />
            <Link href="/venue">Venue</Link><br />
            <Link href="/history">History</Link><br />
        </nav>
    );
};

export default Nav;