
export const EventAsProps = () =>{
    const hihello = () =>{
        alert("hi hello")
    }
    const onhover = () =>{
        alert("youre hovering over me")
    }
    return(
        <>
            <Welcome onbuttonclick = {() => {hihello()}}
            onMouseEnter = {() =>{onhover()}} ></Welcome>
        </>
    )
}


const Welcome = (props) =>{
    const {onbuttonclick, onMouseEnter} = props;
    const handlegreeting = () =>{
        alert("hello im inside child")
        onbuttonclick();
    }

    return (
        <> 
            <button onClick={onbuttonclick}>click me 1</button>
            <button className="border-2" onMouseEnter={onMouseEnter}>click me 2</button>
            <button onClick={handlegreeting} >click me 3</button>
        </>
    )

}