import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RefReci from '../Components/RefReci';
import Gogung from '../Components/GoGung';
import OnAir from '../Components/OnAir';
import { useState } from 'react';
import './Project.css';


export default function Project() {
  const [selected, setSelected] = useState();

  return (
    <div class="tab-container">
      <input class="project-tabradio" id="tab-refreci" type="radio" name="tab-check" checked />
      <label class="project-tablabel" for="tab-refreci">Ref : Reci</label>
      <input class="project-tabradio" id="tab-onair" type="radio" name="tab-check" />
      <label class="project-tablabel" for="tab-onair">On Air</label>
      <input class="project-tabradio" id="tab-gogung" type="radio" name="tab-check" />
      <label class="project-tablabel" for="tab-gogung">GoGung VR</label>
      <section class="project-tab" id="content-refreci">
        <div
        >
          <RefReci />
        </div>
      </section>
      <section class="project-tab" id="content-onair">
        <div
        >
          <OnAir />
        </div>
      </section>
      <section class="project-tab" id="content-gogung">
        <div
        >
          <Gogung />
        </div>
      </section>
    </div>
  );
}
