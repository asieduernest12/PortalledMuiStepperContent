import React from "react";
import { Stack, Step, StepContent, StepLabel, Stepper } from "@mui/material";

const formSteps = [
  { index: 0, label: "form 0", component: <>form 0 component</> },
  { index: 1, label: "form 1", component: <>form 1 component</> },
  { index: 0, label: "form 2", component: <>form 2 component</> },
];


export const PortalledContainer = () => {
  const container = useRef(null)
  return (
    <Stack direction="row">
      <Box
        className="sidepanel-showStepperIndexes"
        sx={{ flex: "0 0 20%" }}
      >
        {/* show steppers list */}
        <Stepper>
          {formSteps.map(step=> (
            <Step>
              <StepLabel>{step.label}</StepLabel>
              <StepContent></StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box className="portalledComponent" sx={{ flex: "0 1" }}>
        <h2>Portal container</h2>

        <Box ref={container}>
          {/* active stepper component should appear here */}
        </Box>
      </Box>
    </Stack>
  );
};
