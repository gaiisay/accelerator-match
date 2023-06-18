import React from "react";
import SectionWrapper from "../../SectionWrapper";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

export default function Roadmap() {
  return (
    <SectionWrapper>
      <div className="mb-4 space-y-3 text-center" id="faqs">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Roadmap</h1>
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography fontFamily={"system-ui"} mr={2}>
              Q1 / 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "rgb(19 150 74)" }} />
            <TimelineDot sx={{ bgcolor: "rgb(19 150 74)" }}>
              {/* <FastfoodIcon /> */}
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "rgb(19 150 74)" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              component="span"
              sx={{ ml: 2, fontWeight: "bold" }}
            >
              Soft Launch v0.1
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ ml: 2 }}>
              Website launch
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ ml: 2 }}>
              Proof product market fit
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ ml: 2 }}>
              First startup & accelerator signups
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography fontFamily={"system-ui"} ml={2}>
              Q2 / 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "rgb(19 150 74)" }} />
            <TimelineDot>{/* <LaptopMacIcon /> */}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              component="span"
              sx={{ mr: 2, fontWeight: "bold" }}
            >
              Full Launch v1.0
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              Introduction of accelerator dashboard
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              Scouting profile
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              Custom startup filters
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              3rd party authentication
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography fontFamily={"system-ui"} mr={2}>
              Q3 / 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>{/* <HotelIcon /> */}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              component="span"
              sx={{ ml: 2, fontWeight: "bold" }}
            >
              Dashboard Updates
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ ml: 2 }}>
              Startup statistics & advanced analytics
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ ml: 2 }}>
              Short listing
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ ml: 2 }}>
              Visual mapping
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography fontFamily={"system-ui"} ml={2}>
              Q4 / 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              component="span"
              sx={{ mr: 2, fontWeight: "bold" }}
            >
              Startup Dashboard
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              Customizable startup profile
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              3rd party authentication
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              Profile visits
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography fontFamily={"system-ui"} ml={2}>
              Q1 / 2024
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              component="span"
              sx={{ mr: 2, fontWeight: "bold" }}
            >
              Advanced Scouting
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              Seamless API integration with No-Code tools
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}>
              AI based scouting Co-Pilot
            </Typography>
            <Typography fontFamily={"system-ui"} sx={{ mr: 2 }}></Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </SectionWrapper>
  );
}
