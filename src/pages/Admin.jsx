import { useLocation } from "react-router-dom";

function Admin() {
    const location = useLocation();
    console.log(location);
    return <>admin</>;
}

export default Admin;
