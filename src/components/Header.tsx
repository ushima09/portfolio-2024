'use client';

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as Scroll } from 'react-scroll';
import { useState } from 'react';

const menuLinks: Array<{ text: string; url: string }> = [
  { text: 'TOP', url: 'top' },
  { text: 'HISTORY / EXPERIENCE', url: 'history_and_experience' },
  { text: 'SKILLS', url: 'skills' },
  { text: 'PROJECTS', url: 'projects' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        id="header"
        position="fixed"
        sx={{ boxShadow: 'none', bgcolor: 'transparent', mt: 2 }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '999px',
              backdropFilter: 'blur(24px)',
              boxShadow: 3,
            }}
          >
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon sx={{ color: '#000' }} />
              </IconButton>
              <Drawer
                open={open}
                onClose={() => toggleDrawer(false)}
              >
                <Box sx={{ width: 250 }}>
                  <List>
                    {menuLinks.map((link) => (
                      <Scroll
                        key={link.text}
                        to={link.url}
                        smooth={true}
                        onClick={() => toggleDrawer(false)}
                      >
                        <ListItem>
                          <ListItemText primary={link.text} />
                        </ListItem>
                      </Scroll>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {menuLinks.map((link) => (
                <Scroll
                  key={link.text}
                  to={link.url}
                  smooth={true}
                >
                  <Button sx={{ color: '#000', borderRadius: '999px', pr: 2, pl: 2 }}>
                    {link.text}
                  </Button>
                </Scroll>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
