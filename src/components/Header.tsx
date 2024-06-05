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
import { Menu, GitHub } from '@mui/icons-material';
import { Link as Scroll } from 'react-scroll';
import { useState } from 'react';

const menuLinks: Array<{ text: string; url: string }> = [
  { text: 'トップ', url: 'top' },
  { text: '経歴', url: 'history_and_experience' },
  { text: 'スキル', url: 'skills' },
  { text: 'プロジェクト', url: 'projects' },
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
            <Box
              sx={{
                display: { xs: 'flex', justifyContent: 'space-between', sm: 'none' },
                width: 1,
              }}
            >
              <IconButton onClick={() => toggleDrawer(true)}>
                <Menu sx={{ color: '#000' }} />
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
              <Button
                sx={{ minWidth: 'auto' }}
                href="https://github.com/ushima09"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHub sx={{ color: '#000' }} />
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'space-between',
                width: 1,
              }}
            >
              <Box sx={{ display: 'flex' }}>
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
              <Button
                sx={{ minWidth: 'auto', pr: 2, pl: 2 }}
                href="https://github.com/ushima09"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHub sx={{ color: '#000' }} />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
