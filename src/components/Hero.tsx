import { Box, Chip, Container, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const Hero = () => {
  return (
    <Container
      id="top"
      disableGutters
      sx={{ pt: { xs: 16, sm: 20 }, pr: 0, pl: 0 }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{
          color: lightBlue[600],
          mb: { xs: 2, sm: 4 },
        }}
      >
        portfolio
      </Typography>
      <Container
        sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}
      >
        <Chip label="# フロントエンドエンジニア" />
        <Chip label="# コーダー" />
      </Container>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
        <Chip label="# 本" />
        <Chip label="# 音楽" />
        <Chip label="# ゲーム" />
        <Chip label="# ランニング" />
      </Container>
    </Container>
  );
};

export default Hero;
