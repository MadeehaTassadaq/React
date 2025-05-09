type name = {
    name: string;
    color?:string;
    children: React.ReactNode;
};
function Wrapper({children,color="orange"}:name) {
    return <div style={{ color: color ,border:"10px solid green"}}>
      {children}
      
    </div>
}
export default Wrapper;