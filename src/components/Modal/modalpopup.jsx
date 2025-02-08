import { Button, Modal, Box, Autocomplete, TextField, ThemeProvider } from "@mui/material";
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
    p: 4,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const { rows, columns } = useModalPopUp();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Button variant="contained" size="large" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box sx={style}>
            <h3>Management ID 291563745483</h3>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Autocomplete
                disablePortal
                options={["0001", "0002", "0003"]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select Version Number" />}
              />
              <Button variant="contained" size="small">Button1</Button>
              <Button variant="contained" size="small">Button2</Button>
              <Button variant="contained" size="small">Button3</Button>
            </Box>
            <Box sx={{ flex: 1, minHeight: 300, overflow: "auto" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                disableColumnFilter
                disableColumnMenu
                disableSelectionOnClick
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button variant="contained">Confirm</Button>
              <Button variant="contained" onClick={() => setModalOpen(false)}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
};

export default ModalPopUp;
