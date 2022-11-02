import React from "react";
import ReactDOM from "react-dom/client";
 const arr = []
export function App() {
  function Submission() {
    // Event.preventDefault()
    const x = ReactDOM.createRoot(document.getElementById("root"));
    // x.style.visibility="hidden";
    
     const z =  {}
     z.name=document.getElementById("name").value;
     z.dept=document.getElementById("dept").value;
     z.rate=document.getElementById("rate").value;
     
    //  const y = ReactDOM.createRoot(document.getElementById('root2'))
       
     arr.push(z)
     console.log(arr)
  
     function Back(){ 
         x.render(<Aform/>)
        }
      
        
              
       
    x.render(
      <>
          <button id="onback" onClick={Back}>Go Back</button>
          <div id="card">{arr.map(a=><div>name-{a.name}<br/> department-{a.dept}<br/> rating-{a.rate}<hr/></div>)}</div>
      </>
    );
  }
  function Aform(){
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontSize: "30px",
        alignItems: "center",
      }}
    >  
      <h1 style={{ textAlign: "center" }}>EMPLOYEE FEEDBACK FORM</h1>
      <span>NAME-</span> 
      <input name="name" id="name"  type={"text"}  />
      <hr />
      <span>DEPARTMENT-</span>
      <input name="dept" id="dept"  type={"text"}  />
      <hr />
      <span>RATING-</span>
      <input name="rate" id="rate"  type={"number"}  />
      <hr />
      <button onClick={Submission}>submit</button>
      <button onClick={Data}>DATA</button>
      
    </div>
    ) 
  }
  function Data(){
    const x = ReactDOM.createRoot(document.getElementById("root"));
    function Back(){ 
      x.render(<Aform/>)
     }
  x.render(
    <>
        <button id="onback" onClick={Back}>Go Back</button>
        <div id="card">{arr.map(a=><div>name-{a.name}<br/> department-{a.dept}<br/> rating-{a.rate}<hr/></div>)}</div>
    </>
 ) }
  return (
    <Aform/>
  );
}

