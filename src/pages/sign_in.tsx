import { Input, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export function SignIn() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <form className="bg-white w-[430px] rounded-xl py-12 px-7 text-[#151515] shadow-md">
                <h1 className="font-bold text-[36px] text-center mb-9">Sing In</h1>
                <div className="flex flex-col gap-4 mb-[30px]">
                    <label htmlFor="UserName" className="flex flex-col gap-2">
                        <span>User name</span>
                        <TextField  type="text" id="UserName" variant="outlined" label="Enter your user name" className="w-full " />
                    </label>
                    <label htmlFor="UserName" className="flex flex-col gap-2">
                        <span>Password</span>
                        <TextField type="password" id="UserName" variant="outlined" label="Enter your password" className="w-full" />
                    </label>
                </div>
                <button className="bg-[#6200EE] py-[10px] w-full font-medium text-[#fff] rounded-[4px]">Submit</button>
                <span className="block text-center mt-3">Don't have an account signed up? <Link className="text-[#6200EE] pl-1" to={'/sing_up'}> Go to sign up.</Link></span>
            </form>
        </div>
    )
}