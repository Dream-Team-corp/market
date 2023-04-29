import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Admin() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.token) {
            if (JSON.parse(localStorage.user_data).user_role === "admin") {
                navigate("/admin");
            } else {
                navigate("/seller");
            }
        } else {
            navigate("/login")
        }
    }, [navigate]);
    return <h1>lorem</h1>;
}

export default Admin;
