import React from 'react'
// import GoogleLogin from 'react-google-login'

const clientId = '551012604109-0koqi8pnn1j2p6jkmua2o84foe07bomi.apps.googleusercontent.com'

const onSuccess = (res) =>{
    console.log("Login success",res)
}
const onFailure = (res) =>{
    console.log("Login failed",res)
}
const GoogleLoginUser = () => {
  return (
    <div>
        <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default GoogleLoginUser