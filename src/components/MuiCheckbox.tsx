import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [accepted, setAccepted] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(event.target.checked);
  };

  const [skills, setSkills] = useState<string[]>([]);
  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={accepted} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checked={accepted}
          checkedIcon={<Bookmark />}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            value="html"
            control={
              <Checkbox
                checked={skills.includes("html")}
                onChange={handleSkillsChange}
              />
            }
          />
          <FormControlLabel
            label="CSS"
            value="css"
            control={
              <Checkbox
                checked={skills.includes("css")}
                onChange={handleSkillsChange}
              />
            }
          />
          <FormControlLabel
            label="JavaScript"
            value="javascript"
            control={
              <Checkbox
                checked={skills.includes("javascript")}
                onChange={handleSkillsChange}
              />
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
