import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

const projectItems = [
  {
    title: 'ポートフォリオ',
    image: '/image/project_01.png',
    desc: 'このサイトです。Next.jsとMaterial UIで実装しています。コード品質担保のためESLint・Prettierを導入し、保存時に自動フォーマットされるよう設定しています。',
  },
  {
    title: 'gulp環境',
    image: '/image/project_02.png',
    desc: 'HTML/CSS（Scss）/JSのページ作成用の環境です。localhostで表示確認ができるようBrowser-Syncを導入しています。コード品質担保のため各種リンターを導入しています。',
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
        sx={{ mb: 3 }}
      >
        プロジェクト
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
                p: {
                  xs: 2,
                  sm: 3,
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  display: 'block',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={item.image}
                  layout="intrinsic"
                  width={2880}
                  height={1576}
                  alt=""
                />
              </Box>
              <Typography>{item.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
