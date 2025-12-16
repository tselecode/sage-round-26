

export default function Input() {
    return <>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '50px 20px', width: '500px', margin: '20px 0px', background: 'aqua', justifyContent: 'center', alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:''}}>
            <label htmlFor="input">username: </label>
            <input type="text" />
            <label htmlFor="input">password: </label>
            <input type="password" /><br />
            </div>
             <button>Login</button>
        </div>
       
    </>
}