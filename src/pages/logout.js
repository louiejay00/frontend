/* eslint-disable react/jsx-no-undef */
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useState } from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthContext from "../context/AuthProvider";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import lightGreen from "@material-ui/core/colors/lightGreen";


export default function LogoutPage () {
  const { Logout } = useContext(AuthContext);
  const {open, setOpen} = useState();
  return (
    <Box>
      <Paper>
        <Button type="button"
        onclick={Logout}
        setOpen={LogoutModal}> 
       <h1>Log Out</h1>
        </Button>
      </Paper>
    </Box>
  )
  
}
const LogoutModal = ({ openModal,setOpenModal }) =>{
const { Logout } = useContext(AuthContext);


  return (
    <Modal
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    open={openModal}
    onClose={() => {
      setOpenModal(false);
    }}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={openModal}>
      <Paper>
        <Box p={2}>
          <Typography variant="h6">Are you sure you want to leave the Website</Typography>
          <Box display="flex" justifyContent="space-between">
            <Button
              disableElevation
              color="default"
              variant="contained"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                background: lightGreen["A700"],
              }}
              disableElevation
              variant="contained"
              onClick={Logout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fade>
  </Modal>
    
  );
}







  

  
 

