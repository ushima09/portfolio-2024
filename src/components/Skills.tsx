import { ArrowDownward } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';

const skillItems = [
  {
    summary: 'HTML',
    detail:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eaque possimus vero accusantium ipsa earum harum officia doloremque dolorum tempore eius, et qui doloribus omnis corporis blanditiis porro odio cum.',
  },
  {
    summary: 'CSS',
    detail:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eaque possimus vero accusantium ipsa earum harum officia doloremque dolorum tempore eius, et qui doloribus omnis corporis blanditiis porro odio cum.',
  },
];

const Skills = () => {
  return (
    <Container
      id="skills"
      disableGutters
      sx={{ pt: { xs: 10, sm: 12 }, pr: { xs: 2, sm: 4 }, pl: { xs: 2, sm: 4 } }}
    >
      <Typography
        variant="h2"
        align="center"
      >
        Skills
      </Typography>
      {skillItems.map((skill) => (
        <Accordion key={skill.summary}>
          <AccordionSummary expandIcon={<ArrowDownward />}>
            <Typography>{skill.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{skill.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Skills;
