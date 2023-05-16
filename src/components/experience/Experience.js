import React from "react";
import {
  VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Grid } from "@mui/material";
import { TimelineElement } from "./TimelineElement"
import { info } from "../../info/Info"
import { Star } from "@mui/icons-material";

export default function Experience() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Grid container display={'flex'} justifyContent={'center'}>
        <VerticalTimeline>
          {
            info.experiences.map((experience) => (
              <TimelineElement experience={experience} />
            ))
          }
          <VerticalTimelineElement
            iconStyle={{ background: info.gradient, color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Grid>
    </Box>
  );
}
