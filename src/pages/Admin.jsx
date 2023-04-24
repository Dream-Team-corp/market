import { useLocation } from "react-router-dom";

function Admin() {
    const location = useLocation();
    console.log(location);
    return <div>admin</div>;
}

export default Admin;
