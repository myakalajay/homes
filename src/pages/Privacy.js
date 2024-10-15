import React from "react";
import Link from "next/link";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';
function Privacy() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Head>
  <title>Privacy Policy</title>
  <meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your rights and choices regarding your data while using our services." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

    <div className='container-fluid privacy'> 
    <div className="row">
    <div className="col-sm-12 col-md-12 mx-5 mt-3">
                <Link href="/" style={{textDecorationLine:"none"}}><span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span></Link>
                {/* <span className="home">Footer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span> */}
       <span className="home text-danger">Privacy Policy </span>
       </div>
<div className='conventional-loans' >
            <img src="./assets/images/home-page/Privacy.jpg" alt="" className="w-100" />
       </div>

   <div className="px-5 ">
    <p className='loan1'>Privacy Notice:</p>
    <p  > At [Home Rates Yard], we are committed to protecting your privacy and ensuring the security of your personal information. 
    This Privacy Notice outlines how we collect, use, disclose, and safeguard the information you provide to us when using our website or services.
    </p>
    <p className=' loan1 '> Information We Collect:</p>
    <p  >When you interact with our website or utilize our services, we may collect the following types of personal information:</p>
    <div className=' px-4'>
      <span className="policy-name"> 1.Name:</span> 
        <span>collect your name to personalize our communication with you and to facilitate the processing of your application for home loans or related services.</span><br/>
        <span className="policy-name">  2.Email Address: </span>
        <span>Your email address is collected to communicate with you regarding your inquiries, applications, and updates related to our services.</span><br/>
        <span className="policy-name">  3.Property Address: </span>
        <span>We may collect your property address to assess your eligibility for home loans and to provide relevant information and services related to your property.</span><br/>
        <span className="policy-name">  4.Income Details: </span>
        <span>Your income details are collected to evaluate your financial situation and eligibility for home loans or other financial products.
        facilitate the processing of your application for home loans or related services.</span><br/>
        </div>
      <p className='loan1'>How We Use Your Information:</p>
      <p >We use the personal information we collect for the following purposes:<br/>
       1.To process and evaluate your applications for home loans or related financial services.<br/>
      2.To communicate with you regarding your inquiries, applications, and updates related to our services.<br/>
      3.To verify your identity and prevent fraud or unauthorized access to your information.<br/>
      4.To improve our website, services, and customer experience.<br/>
      5.To comply with legal and regulatory requirements.<br/></p>
      <p className=' loan1 '> Disclosure of Information:</p>
      <p> We may disclose your personal information to third parties in the following circumstances:<br/>
      1.To financial institutions, lenders, or service providers involved in processing your applications for home loans or related services.<br/>
      2.To comply with legal obligations, regulatory requirements, or to respond to lawful requests from government authorities.<br/>
      3.To protect the rights, property, or safety of our company, our customers, or others.<br/>
      4.In connection with a business transfer, such as a merger, acquisition, or sale of assets.<br/></p>
      <p className=' loan1 '> Data Security:</p>
      <p >We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. 
      However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      <p className=' loan1 '> Your Choices and Rights:</p>
      <p >You have the right to access, update, or correct your personal information at any time by contacting us using the information provided below. 
      You may also have the right to request the deletion of your personal information, subject to applicable legal requirements.</p>
      <p className=' loan1 '> Contact Us:</p>
      <p >If you have any questions, concerns, or requests regarding this Privacy Notice or our data practices, please contact us at:<br/>
      [Your Contact Information]<br/>
      Thank you for trusting [Your Website Name] with your personal information. We are committed to protecting your privacy and ensuring a safe and secure experience when using our services.<br/>
      [Your Website Name] [Date]<br/></p> 
</div>
<div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
        <p className="offers1">Prequalify now with the Homeratesyard <br/>Digital Mortgage Experience</p>

        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
          <div className="mt-5">
          <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button>
        </div>
        <Step
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
      </div>
      </div>
</div>
    </>
  );
}

export default Privacy;
