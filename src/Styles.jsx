import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Rounded corners
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
            justifyContent: "center",
            textAlign: "center",
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
            wordWrap: "break-word",
            overflow: "hidden",
          },
        },
      },
    },
  },
});

export default theme;
