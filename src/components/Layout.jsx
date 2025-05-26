import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Outlet /> {/* This is where the child routes will be rendered */}
        </>
    )
}

export default Layout
// This code defines a Layout component that uses the Outlet component from react-router-dom.