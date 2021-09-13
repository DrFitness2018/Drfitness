import React from 'react'

const HeadingComponent = ({ heading }) => {
  return (
    <div className="container ">
        <div className="col">
          <div className="text-center">
            <h2
              style={{
                fontWeight: "700",
                marginBottom: "40px",
                color: "#1a4774",
              }}
            >
              {heading}
            </h2>
          </div>
        </div>
    </div>

  )
}

export default HeadingComponent
