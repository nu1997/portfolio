import * as React from 'react';
import { Typography } from '@mui/material';

import './Connect.css'

export default function Connect() {

  return (
    <div>
      <div className="connect-background-img">
        <div className="connect-content">
          <div>
            <div>
              <Typography variant="h1" className="nameText">Jiu Park</Typography>
            </div>
            <div>
              <Typography variant="subtitle1" className="jobText">Web Developer</Typography>
            </div>
            <div>
              <Typography variant="body1" className="locText">Seoul, South Korea</Typography>
            </div>
            <Typography variant="body2" className="contactText">Contact via{" "}
              <a className="hyperText" href="mailto:jiwooapark@gmail.com">jiwooapark@gmail.com</a>
            </Typography>
            <Typography variant="body1" className="infoText">
              <a 
                className="hyperText" 
                href="https://www.linkedin.com/in/park-jiwoo-411a86214/" 
                target="_blank" 
                rel="noreferrer"
              >LinkedIn</a> |{" "}
              <a
                className="hyperText"
                href="https://github.com/nu1997" 
                target="_blank" 
                rel="noreferrer"
              >Github</a>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
};