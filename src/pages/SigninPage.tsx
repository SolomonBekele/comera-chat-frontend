import React from "react";
import SigninForm from "../components/forms/SigninForm";


const SigninPage: React.FC = ()=>{
    return(
        <div className="bg-[oklch(0.94_0.03_182.33)] min-h-screen flex justify-center items-center">
            <SigninForm/>
    </div>
    )
}

export default SigninPage;