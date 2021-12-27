import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';


import RefReci from '../Components/Projects/RefReci';
import Gogung from '../Components/Projects/GoGung';
import OnAir from '../Components/Projects/OnAir';
import './Project.css';


export default function Project() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <Box className="tab-style">
          <TabList 
            onChange={handleChange}
            aria-label="project tabs"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Ref : Reci" value="1" />
            <Tab label="On Air" value="2" />
            <Tab label="GoGung VR" value="3" />
          </TabList> 
        </Box>
        <TabPanel value="1">
          <RefReci />
        </TabPanel>
        <TabPanel value="2">
          <OnAir />
        </TabPanel>
        <TabPanel value="3">
          <Gogung />
        </TabPanel>
      </TabContext>
    </div>
  );
}
