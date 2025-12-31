import Button from "../components/Button";

export default function Welcome(){
    return<>
     <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",padding:50,marginTop:40}}>
    <div style={{width:500}}>
      <h2>hi there!</h2>
      <h1>I'm Tselote</h1>
      <h4>fullstack developer | UI & UX designer</h4>
      <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div>
      <h1>image</h1>
      <img/>
    </div>
  </div>
    <div style={{display:"flex",justifyContent:"flex-start",margin:50}}>
        <Button name="want more about me?"
                  style={{padding:10,borderRadius:5,fontSize:15,marginLeft:10}}/>
    </div>
    
    </>
} 