import React from 'react'

export default function Gainpage2(props) {
    console.log(props)
    return (
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "#63d471",
            color: "#212121",
        }}>
            <h1>{props.data}</h1>
            <h1>Week 1</h1>
            <h4>Day 1 -5 </h4>
            <h1>Week 2</h1>
            <h4>Day 1 -5 </h4>
            <h1>Week 3</h1>
            <h4>Day 1 -5 </h4>
            <h1>Week 4</h1>
            <h4>Day 1 -5 </h4>
        </div>
    )
}
