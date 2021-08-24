import React from 'react'
import ReactDOM from 'react-dom'
import ChatComponent from './ChatComponent'



export default function Inbox() {
    return (
        <div className="docpages">
      <div
        className="container emp-profile mt-5 mb-4 "
        style={{
          backgroundColor: "#FAFAFA",
          padding: 20,
          boxShadow: "0px 2px 5px #888888",
        }}
      >
        <ChatComponent />
        {/* { ReactDOM.render(<ChatComponent />, document.getElementById('root')) } */}
      </div>
      </div>
    )
}
