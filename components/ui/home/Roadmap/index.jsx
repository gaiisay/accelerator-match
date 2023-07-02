import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";
import SectionWrapper from "../../../SectionWrapper";

export default function Roadmap() {
  return (
    <SectionWrapper>
      <div className="mb-4 space-y-3 text-center" id="faqs">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Roadmap</h1>
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              mr={2}
            >
              Q1 / 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "rgb(19 150 74)" }} />
            <TimelineDot sx={{ bgcolor: "rgb(19 150 74)" }}></TimelineDot>
            <TimelineConnector sx={{ bgcolor: "rgb(19 150 74)" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              fontSize={{ xs: "1rem", sm: "1.5rem" }}
              sx={{ ml: 2, fontWeight: "bold" }}
            >
              Soft Launch v0.1
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ ml: 2, mb: 0.5 }}
            >
              Website launch
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ ml: 2, mb: 0.5 }}
            >
              Proof product market fit
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ ml: 2, mb: 0.5 }}
            >
              First startup & accelerator signups
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              ml={2}
            >
              Q2 / 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "rgb(19 150 74)" }} />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"system-ui"}
              variant="h6"
              fontSize={{ xs: "1rem", sm: "1.5rem" }}
              sx={{ mr: 2, fontWeight: "bold" }}
            >
              Full Launch v1.0
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              Introduction of accelerator dashboard
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              Scouting profile
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              Custom startup filters
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              3rd party authentication
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              mr={2}
            >
              Q3 / 2023
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
              fontSize={{ xs: "1rem", sm: "1.5rem" }}
              sx={{ ml: 2, fontWeight: "bold" }}
            >
              Dashboard Updates
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ ml: 2, mb: 0.5 }}
            >
              Startup statistics & advanced analytics
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ ml: 2, mb: 0.5 }}
            >
              Short listing
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ ml: 2, mb: 0.5 }}
            >
              Visual mapping
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              ml={2}
            >
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
              fontSize={{ xs: "1rem", sm: "1.5rem" }}
              sx={{ mr: 2, fontWeight: "bold" }}
            >
              Startup Dashboard
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              Customizable startup profile
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              3rd party authentication
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              Profile visits
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              ml={2}
            >
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
              fontSize={{ xs: "1rem", sm: "1.5rem" }}
              sx={{ mr: 2, fontWeight: "bold" }}
            >
              Advanced Scouting
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              Seamless API integration with No-Code tools
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              fontSize={{ xs: "0.8rem", sm: "1rem" }}
              sx={{ mr: 2, mb: 0.5 }}
            >
              AI based scouting Co-Pilot
            </Typography>
            <Typography
              fontFamily={"system-ui"}
              sx={{ mr: 2, mb: 0.5 }}
            ></Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </SectionWrapper>
  );
}
