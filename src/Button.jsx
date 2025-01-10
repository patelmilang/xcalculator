
const Button = ({name,value,handleClick}) =>{

    return (<>
    <button type="button" style={{
        borderRadius:"5px",
        padding:"5px",
        margin:"3px"
    }} value={value} onClick={handleClick}>{name}</button>
    </>)
}
export default Button;