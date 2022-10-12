import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Avatar, Button} from '@material-ui/core';
import { Stack } from "@mui/material";
import { Menu } from "@mui/icons-material";

const styles = {

    //IMPORT MATERIAL UI AND MATERIAL UI ICONS FIRST

  flex: {
    flex: 1,
  },
  submenuPadding: {    
    display: 'flex',
    flexDirection: 'column',
    position: "relative",   
    top: "100px",
    background: "red",
    width: "100%",
  },
};

const handleClick = () => {
    console.log("click");
}

const Navbar = () => {
  return (
    <>
      <Box sx={styles.flex}>
        <AppBar position='sticky' disablegutters='true'>
          <Toolbar>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='Banff Log Cabin Logo'
              src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
            />
            <Typography variant='title' color='inherit' sx={styles.flex}>Banff Log Cabin</Typography>
            <Stack sx={styles.submenuPadding}>
                <Button>Hellooo</Button>
                <Button>Hellooo</Button>
                <Button>Hellooo</Button>
                <Button>Hellooo</Button>
            </Stack>
            <IconButton color='inherit' aria-label='Menu'>
              <Menu onClick={handleClick} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography m={2} spacing={2}>
        Testin Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim mollitia, molestiae quas vel sint commodi repudiandae consequuntur  voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
      </Typography>
    </>
  );
};

export default Navbar;
