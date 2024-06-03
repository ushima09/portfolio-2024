import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box
        id="footer"
        sx={{ mt: 12, pt: 4, pb: 4, bgcolor: '#fff', boxShadow: 2 }}
      >
        <Typography align="center">&copy; 2024 ushima09. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default Footer;
