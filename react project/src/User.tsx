interface UserProps{
    name:string,
    age:number,
    email:string
}

function User(Props:UserProps) {
    
    return (
        <div>
          <hr/>  
            <h1>User Component</h1>
            <h2>Name:{Props.name }</h2>
            <h2>Age:{Props.age}</h2>
            <h2>Email:{Props.email}</h2>
            <hr/>
        </div>
    );
}
export default User;