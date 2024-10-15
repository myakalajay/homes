import React ,{useState,useEffect} from "react";
import Dashmain from "./Dashmain";
import StepProperty from "@/page/StepProperty";
// import StepProperty from "@/page/stepProperty";

export default function Property(){
    const [modalpropertyshow, setModalPropertyShow] = useState(false);

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center mt-3">
                    <button className="scenarios-btn" style={{marginLeft:"0rem",marginBottom:"10px",width:"15%"}} onClick ={()=>setModalPropertyShow(true)}>Add New Property</button>
                        <StepProperty 
                            show={modalpropertyshow}
                            onHide={() => setModalPropertyShow(false)}
                        />
                    </div>
                    <div className="">
                        <Dashmain/>
                    </div>     
                </div>
            </div>      
        </>
    )
}