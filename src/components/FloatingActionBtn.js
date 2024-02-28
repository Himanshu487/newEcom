import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';

export default function FloatingActionButtons() {

    const phoneNumber = '9718862309';

    const emailAddress = 'himanshuatkaan66@gmail.com';
    
    const handleButtonClick = () => {
        window.location.href = `mailto:${emailAddress}`;
      };

  return (
    <Box className="FloatingActionBtn" sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add" onClick={handleButtonClick}>
                <EmailIcon />
            </Fab>
            <a href={`tel:${phoneNumber}`} className='CallIcon'>
                <Fab color="secondary" aria-label="edit" className='CallIconFab' >
                    <AddIcCallIcon/>
                </Fab>
            </a>
        </Box>
  );
}



