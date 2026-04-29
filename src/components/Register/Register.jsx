import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Alert, Typography, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Register.css';

const Register = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    setOpenModal(false); 
    setShowAlert(true);  
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <button className="open-btn" onClick={() => setOpenModal(true)}>
        Kirish
      </button>

      {showAlert && (
        <div className="alert-container">
          <Alert severity="info" onClose={() => setShowAlert(false)}>
            Tizimga muvaffaqiyatli kirdingiz!
          </Alert>
        </div>
      )}

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box className="modal-box">
          <IconButton className="close-btn" onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </IconButton>
          
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography fontSize="50px">👋</Typography>
            
            <Typography variant="h6">
              AliExpress da xarid amalga oshirish uchun kirishni amalga oshiring
            </Typography>

            <TextField fullWidth placeholder="Pochtangiz yoki telefoningiz" variant="outlined" />

            <Button fullWidth className="login-btn" onClick={handleLogin}>
              Kirish
            </Button>

            <Stack direction="row" spacing={1}>
              <div className="social-icon">Y</div>
              <div className="social-icon">VK</div>
              <div className="social-icon">@</div>
            </Stack>

            <Button fullWidth className="create-account-btn">
              Akkaunt yaratilsin
            </Button>
            
            <Typography className="footer-text">
              Yordam kerakmi? <br/>
              Ushbu saytdan foydalangan holda siz AliExpress-da avtomatik ravishda profil yaratasiz...
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Register;