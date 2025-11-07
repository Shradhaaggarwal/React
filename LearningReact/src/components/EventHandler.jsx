import styled from "styled-components";

export const EventHandler = () =>{

    const handleClickButton = (event) =>{
        console.log(event);
        console.log(event.target)
        alert("im clicked")
    }

    const welcomeuser = (user) =>{
        alert(`hi ${user}`)
    }

    const But = styled.button({
        backgroundColor: "red",
        margin: "100px"
    })

    return (
        <>
            <button onClick={handleClickButton} className=" border-2 ">CLICK ME</button>
            <br />
            <But onClick={() =>{ welcomeuser('shradha')}} >WELCOME</But>
        </>
    )
}