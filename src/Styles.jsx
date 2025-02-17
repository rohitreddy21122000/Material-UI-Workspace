import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px", // Rounded corners
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-columnHeaders": {
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            display: "flex",
            alignItems:"center",
            width: "100%",
            whiteSpace: "normal", // Allows multi-line headers
            lineHeight: "1.2",
            fontWeight:"bold"
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            whiteSpace: "normal", // Prevents text overflow
            overflow: "hidden",
          },
        },
      },
    },
  },
});

export default theme;
