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
              <Typography variant="h1" className="name-text">Jiu Park</Typography>
            </div>
            <div>
              <Typography variant="subtitle1" className="job-text">Web Developer</Typography>
            </div>
            <div>
              <Typography variant="body1" className="loc-text">Seoul, South Korea</Typography>
            </div>
            <Typography variant="body2" className="contact-text">Contact via{" "}
              <a className="hyper-text" href="mailto:jiwooapark@gmail.com">jiwooapark@gmail.com</a>
            </Typography>
            <Typography variant="body1" className="info-text">
              <a 
                className="hyper-text" 
                href="https://www.linkedin.com/in/park-jiwoo-411a86214/" 
                target="_blank" 
                rel="noreferrer"
              >LinkedIn</a> |{" "}
              <a
                className="hyper-text"
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