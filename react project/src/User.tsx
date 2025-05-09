type name={
    name:string
}
function User({ name="Aiman" }:name) {
    return <div>
        <h1>Hi,{name}</h1>
        
    </div>
}
export default User;