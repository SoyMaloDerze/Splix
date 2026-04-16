import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Entry() {
    const navigate = useNavigate();
  
    useEffect(() => {
        const hasOnboarded = localStorage.getItem("splix_onboarded");
        if (hasOnboarded) {
            navigate("/dashboard");
        } else {
            navigate("/onboarding");
        }
    }, [navigate]);
    return null;
}



