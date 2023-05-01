import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user_data"));
        const role = userData?.user_role || null;
        const token = localStorage.getItem("token");

        if (token && role === "admin") {
            navigate("/admin");
        } else if (token && role === "seller") {
            navigate("/seller");
        } else {
            navigate("/login");
        }
    }, [navigate]);

    return <h1>lorem</h1>;
}

export default Admin;
