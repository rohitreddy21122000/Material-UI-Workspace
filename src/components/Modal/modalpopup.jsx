import { Button, Modal, Box, Autocomplete, TextField, ThemeProvider, Grid2, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useModalPopUp from "./modalpopup.hooks";
import theme from "../../Styles";

const ModalPopUp = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    overflow:'auto',
    scrollbarWidth:'thin'
  };

  const { rows, columns } = useModalPopUp();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Button
          variant="contained"
          size="small"
          onClick={() => setModalOpen(true)}
        >
          Open Modal
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box sx={style}>
          <Typography  variant="h6" sx={{mb:2, fontWeight:"bold"}}>Management Site ID 267654876</Typography>
            <Typography variant="h10">Select Version Number</Typography>
            <Grid2 container flexDirection="row" display="flex" spacing={1}>
              <Grid2 item xs={12} sm={6} md={4} mb={1}>
                <Autocomplete
                  disablePortal
                  options={["0001", "0002", "0003"]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4} m={0.5}>
                <Button variant="contained" size="small">
                  Button1
                </Button>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4} m={0.5} ml="auto">
                <Button variant="contained" size="small">
                  Button2
                </Button>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4} m={0.5}>
                <Button variant="contained" size="small">
                  Button2
                </Button>
              </Grid2>
            </Grid2>

            <Box
              sx={{
                height: "65%",
                overflow: "auto",
                scrollbarWidth: "thin",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                disableColumnFilter
                disableColumnMenu
                rowHeight={40}
                disableSelectionOnClick
              />
            </Box>
            <Grid2 container spacing={1} Direction="row" mt={2}>
              <Grid2 item xs={12} sm={6} md={4}>
                <Button variant="contained">Confirm</Button>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4}>
                <Button variant="contained" onClick={() => setModalOpen(false)}>
                  Close
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
};

export default ModalPopUp;
