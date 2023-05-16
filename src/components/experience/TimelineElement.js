import { Work } from "@mui/icons-material";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export function TimelineElement({ experience }) {
    return <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={`${experience.start} - ${experience.end || "present"}`}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}
    >
        <h1 style={{ fontSize: "30px" }} className="vertical-timeline-element-title">{experience.company}</h1>
        <h2 className="vertical-timeline-element-subtitle">{experience.position}, {experience.localtion}</h2>
        <p>
            {experience.responsibility.map((element) => (
                <p style={{ fontSize: "16px" }}>- {element}</p>
            ))}
        </p>
    </VerticalTimelineElement>
}