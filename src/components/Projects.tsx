import { Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const projectItems = [
  {
    title: 'ポートフォリオ',
    desc: 'このサイトです。',
  },
  {
    title: 'gulp環境',
    desc: 'HTML/CSS/JSのページ作成用の環境です。',
  },
];
const Projects = () => {
  return (
    <Container
      id="projects"
      disableGutters
      sx={{ pt: { xs: 10, sm: 12 }, pr: { xs: 2, sm: 4 }, pl: { xs: 2, sm: 4 } }}
    >
      <Typography
        variant="h2"
        align="center"
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {projectItems.map((item) => (
          <Grid
            key={item.title}
            xs={12}
            sm={6}
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
              }}
            >
              <Typography>{item.title}</Typography>
              <Typography>{item.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
