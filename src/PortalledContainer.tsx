import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Portal,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

const formSteps = [
  { index: 0, label: "PII 0", component: <Stack direction='column' spacing={2}>
    <Box>
      <TextField label='Name'/>
    </Box>
    <Box>
      <TextField label='Age'/>
    </Box>
    <Box>
      <TextField label='Hobby'/>
    </Box>
  </Stack> },
  { index: 1, label: "Profession 1", component: <Stack direction='column' spacing={2}>
    <Box>
      <TextField label='Title'/>
    </Box>
    <Box>
      <TextField label='Experience'/>
    </Box>
    <Box>
      <TextField label='Achievments'/>
    </Box>
  </Stack> },
  { index: 2, label: "label 2", component: <Stack direction='column'>Completed</Stack> },
];

export const PortalledContainer = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const container = useRef(null);
  return (
    <Stack
      direction="row"
      className="PortalledContainer"
      sx={{ width: "100%", height: "100%", }}
      spacing={2}
    >
      <Box className="sidepanel-showStepperIndexes" sx={{ flex: "0 0 20%" }}>
        {/* show steppers list */}
        <Stepper orientation="vertical" activeStep={currentStepIndex}>
          {formSteps.map((step) => (
            <Step>
              <StepLabel>{step.label}</StepLabel>
              <StepContent ref={container}>
                <Portal container={container.current}>{step.component}</Portal>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Divider orientation="vertical" />

      <Stack
        direction="column"
        className="portalledComponent"
        sx={{ flex: "1 0" }}
      >
        <h2>Portal container</h2>

        <Box className="portalWindow" sx={{flex:'1',outline:'1px solid orange',padding:'10px'}} ref={container}>
         
        </Box>
        <Box>
          <Button
            onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
            disabled={currentStepIndex <= 0}
          >
            Prev
          </Button>
          <Button
            onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
            disabled={currentStepIndex >= formSteps.length - 1}
          >
            Next
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};
