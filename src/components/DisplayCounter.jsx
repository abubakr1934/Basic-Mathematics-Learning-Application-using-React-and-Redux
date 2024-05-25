import { useSelector } from "react-redux";
const DisplayCounter=()=>{
    const counter=useSelector((store) => store.counter)
    return(
        <>
        
        <p class="lead mb-4">Welcome to the counter game,learn basic mathematics and dont forget to share with your friends.</p>
        <p class="lead mb-4">counter current value: {counter} </p>
        </>

    )
}
export default DisplayCounter;