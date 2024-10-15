import React,{useState} from "react";
import DOMPurify from 'dompurify';


function ChangePassword(){
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

    return(
        <>
        <div className="pt-3 px-3">
            <span className="profile-name ">Old Password</span>
            <div>
                <input 
                type="password" 
                className="dashboard-text" 
                name="oldPassword" 
                   placeholder="  Enter the Old Password"
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
                placeholder=" Enter the New Password"
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
                name="comfirmpassword" 
             placeholder=" Confirm New Password"
                value={passwordData.comfirmpassword} 
                onChange={handlePasswordChange}
                />
            </div>
        </div>
        <div className="d-flex">
        <div>
            <button type="submit" className="lobutton m-4" >Save</button>
        </div>
        <div>
            <button type="submit" className="lobutton m-4" >Close</button>
        </div>
        </div>
        </>
    );
}

export default ChangePassword;