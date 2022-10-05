import Navbar from "./Navbar";
import Footbar from "./Footbar";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                {children}
            <Footbar />
        </>
    )
}

export default Layout;