// import { Typography } from '@mui/material'
// import D3 from 'd3'
import './Main.css'


export default function Main () {
  return (
    <div>
      {/* <div className="main-title">
        <Typography variant="subtitle1">Main Homepage</Typography>
      </div> */}
      <div className="main-content-wrapper">
        <div className="main-content-left">
          Hello, World!
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill='yellow' />
          </svg>
        </div>
        <div className="main-content-right">
          This is my CV
        </div>
      </div>
    </div>
  )
};