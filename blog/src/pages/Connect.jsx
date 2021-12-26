import * as React from 'react';

export default function Connect() {

  const contentStyle = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    textAlign: "right",
    minHeight: "550px",
    padding: "20px"
  }

  const backgroundStyle = {
    backgroundImage: "url(/images/connect/000021.JPG)",
    backgroundSize: "cover"
  }

  return (
    <div>
      {/* <div className="resume-title">
        Connect
      </div> */}
      <div style={backgroundStyle}>
        {/* <div>
          <img src="/images/connect/000021.JPG" alt="profile" style={imgStyle}/>
        </div> */}
        <div style={contentStyle}>
          <div>
            <div>
              <p>Jiu Park</p>
            </div>
            <div>
              <p>Web Developer</p>
            </div>
            <div>
              <p>Seoul, South Korea</p>
            </div>
            <p>Contact via <a href="mailto:jiwooapark@gmail.com">jiwooapark@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/park-jiwoo-411a86214/" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/nu1997" target="_blank" rel="noreferrer">Github</a></p>
          </div>
        </div>
      </div>
    </div>
  )
};