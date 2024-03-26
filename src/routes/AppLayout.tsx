import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

export default function AppLayout() {
    const location = useLocation();

    useEffect(() => {
        (async () => {
            scroll.scrollTo(0, { duration: 10 });
        })();
    }, [location]);

    return (
        <>
            <Outlet />
        </>
    );
};