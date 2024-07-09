import React, { useState } from 'react';
import { Button, Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

const ReusableModal = ({ open, handleClose, content }) => (
  <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxHeight: '80%',
        overflowY: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      {content}
    </Box>
  </Modal>
);

const ModalContent = () => (
  <Box>
    <Typography variant="h6" gutterBottom>Steps to Create a Website</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom>1. Planning</Typography>
        <Typography variant="body2" gutterBottom>
          - Define goals and target audience.<br />
          - Create sitemap and wireframes.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>2. Design</Typography>
        <Typography variant="body2" gutterBottom>
          - Choose color scheme and typography.<br />
          - Design layout and UI components.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>3. Development</Typography>
        <Typography variant="body2" gutterBottom>
          - Set up environment.<br />
          - Develop frontend and backend.<br />
          - Integrate APIs and databases.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>4. Testing</Typography>
        <Typography variant="body2" gutterBottom>
          - Perform various tests.<br />
          - Fix bugs and ensure compatibility.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>5. Deployment</Typography>
        <Typography variant="body2" gutterBottom>
          - Choose hosting service.<br />
          - Set up CI/CD and deploy.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>6. Maintenance</Typography>
        <Typography variant="body2" gutterBottom>
          - Monitor performance.<br />
          - Update content and implement security.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{  marginTop: '-10px' }} >
        <Typography variant="h6" gutterBottom>Flow Diagram</Typography>
        <img src="https://diviflash.com/wp-content/uploads/2022/12/Web-Design-Process.png.webp" alt="Flow Diagram" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
        <Typography variant="h6" gutterBottom>Data Table</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Step</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Planning</TableCell>
                <TableCell>Define goals, create sitemap.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Design</TableCell>
                <TableCell>Choose colors, design layout.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Development</TableCell>
                <TableCell>Set up environment, develop frontend and backend.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Testing</TableCell>
                <TableCell>Perform tests, fix bugs.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deployment</TableCell>
                <TableCell>Choose hosting, deploy.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maintenance</TableCell>
                <TableCell>Monitor performance, update content.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  </Box>
);

const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ReusableModal open={open} handleClose={handleClose} content={<ModalContent />} />
    </div>
  );
};

export default ModalDemo;
