type studentNames={
    name:string
}


function Student(props: studentNames) {
   
    return (
        <div> 
            <h1>Student Names: {props.name}</h1>
        </div>
    );
}