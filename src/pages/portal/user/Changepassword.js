import React,{useState} from "react";
import DOMPurify from 'dompurify';
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';


function ChangePassword(){
    const email = useSelector(state => state.auth.email);
    const usertype = useSelector((state)=> state.user.usertype)
    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const sanitizeInput = (value) => {
        return DOMPurify.sanitize(value);
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setPasswordData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,

        }));
    };

     const handleSubmitPassword = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_API_URL}/api/v1/auth/changePassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...passwordData,email,usertype}),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Assuming the response contains JSON data
            console.log(data); // Handle success response
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    return(
        <>
        <div className="pt-3 px-3">
            <span className="profile-name ">Old Password</span>
            <div>
                <input 
                type="password" 
                className="dashboard-text" 
                name="oldPassword" 
                   placeholder="Enter the Old Password"
                value={passwordData.oldPassword} 
                onChange={handlePasswordChange}
                />
            </div>
        </div>
        <div className="mt-3 px-3">
            <span className="profile-name ">New Password</span>
            <div>
                <input 
                type="password" 
                className="dashboard-text"  
                name="newPassword" 
                placeholder="Enter the New Password"
                value={passwordData.newPassword} 
                onChange={handlePasswordChange}
                />
            </div>
        </div>
        <div className="mt-3 px-3">
            <span className="profile-name ">Confirm Password</span>
            <div>
                <input 
                type="password" 
                className="dashboard-text"   
                name="confirmpassword" 
             placeholder="Confirm the New Password"
                // value={passwordData.comfirmpassword} 
                // onChange={handlePasswordChange}
                />
            </div>
        </div>
        <div>
            <Link href="/portal"><button className="lobutton mx-4">Close</button></Link>
            <button type="submit" onClick={handleSubmitPassword} className="lobutton m-4" >Save</button>
        </div>
        </>
    );
}

export default ChangePassword;