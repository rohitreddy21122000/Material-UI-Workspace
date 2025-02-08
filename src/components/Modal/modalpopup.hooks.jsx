import { useState } from "react";

const useModalPopUp = () => {
  const [rows, setRows] = useState([
    { id: 1, col1: '598934_987_B13_03', col2: 'B13' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 2, col1: '598934_987_B13_01', col2: 'B11' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 3, col1: '598934_987_B13_02', col2: 'B12' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 4, col1: '598934_987_B13_03', col2: 'B13' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 5, col1: '598934_987_B13_04', col2: 'B14' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 6, col1: '598934_987_B13_05', col2: 'B15' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 7, col1: '598934_987_B13_06', col2: 'B16' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 8, col1: '598934_987_B13_07', col2: 'B17' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 9, col1: '598934_987_B13_08', col2: 'B18' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 10, col1: '598934_987_B13_09', col2: 'B19' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 11, col1: '598934_987_B13_10', col2: 'B10' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 12, col1: '598934_987_B13_11', col2: 'B11' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'},
    { id: 13, col1: '598934_987_B13_12', col2: 'B12' , col3:24,col4:310,col5:0,col6:0,col7:'X7CQAP-FRO-860-VRO'}
  ]);
  const [columns, setColumns] = useState([
    { field: 'col1', headerName: 'Transmitter Name', flex: 1, editable: true ,minWidth:180},
    { field: 'col2', headerName: 'Frequency Band', flex: 1, editable: true },
    { field: 'col4', headerName: 'Height', flex: 1, editable: true },
    { field: 'col3', headerName: 'Azimuth', flex: 1, editable: true },
    { field: 'col5', headerName: 'Tilt', flex: 1, editable: true },
    { field: 'col6', headerName: 'External Tilt', flex: 1, editable: true },
    { field: 'col7', headerName: 'Antenna', flex: 2, editable: true },
  ]);

  return {
    rows,
    setRows,
    columns,
    setColumns,
  };
};

export default useModalPopUp;
