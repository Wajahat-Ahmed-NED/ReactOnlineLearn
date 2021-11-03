import React, { useState } from 'react'
// import from 'React'

export default function About(props) {
let myStyle={
        color:props.mode==='light'? 'black':'white',
        backgroundColor:props.mode==='light'?'rgb(220 220 220)':'rgb(126 126 126)',
    }

    const [btn, setbtn] = useState("Enable Dark Mode")
    // const changeMode = () => {
    //     if (myStyle.color == 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtn("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         })
    //         setbtn("Enable Light Mode")
    //     }
    // }

    return (
        <>
        <div className="container p-5 my-2" style={myStyle,{color:props.mode==="dark"?'white':'black'}}>
            <h2>About Us Page</h2>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyze Your Text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free To Use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Use Any Where </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={changeMode} class="btn btn-outline-primary my-4 rounded-pill" >{btn}</button> */}

        </div>
        </>
    )
}
