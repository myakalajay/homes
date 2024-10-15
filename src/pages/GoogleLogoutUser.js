import React from 'react'
// import { GoogleLogout } from 'react-google-login'

const clientId = '551012604109-0koqi8pnn1j2p6jkmua2o84foe07bomi.apps.googleusercontent.com'

const onSuccess = (res) =>{
    console.log("Login success",res)
}
const onFailure = (res) =>{
    console.log("Login failed",res)
}
const GoogleLogoutUser = () => {
  return (
    <div>
<GoogleLogout
clientId={clientId}
buttonText='Logout'
onLogoutSuccess={onSuccess}
/>
    </div>
  )
}

export default GoogleLogoutUser