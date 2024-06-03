import { Box, Chip, Container, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const Hero = () => {
  return (
    <Container
      id="top"
      disableGutters
      sx={{ pt: { xs: 10, sm: 12 }, pr: 0, pl: 0 }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{
          color: lightBlue[600],
        }}
      >
        Portfolio
      </Typography>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
        <Chip label="# フロントエンドエンジニア" />
        <Chip label="# コーダー" />
        <Chip label="# 本" />
        <Chip label="# 音楽" />
        <Chip label="# ゲーム" />
        <Chip label="# ランニング" />
      </Container>
    </Container>
  );
};

export default Hero;
