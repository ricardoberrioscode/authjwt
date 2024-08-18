'use client'
//https://mui.com/x/react-data-grid/row-selection/
import { useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useUsersState } from "@context/createContexts";
import { styleGridList } from "@style/StyleRendCellLista";

const Listas = () => {
    const {
        users,
        logget,
        getUsers,
        colums,
        setCellClick,
        setSelectionModel,
        keysCellClick,
    } = useUsersState()

    const handleCellClick = (event) => { setCellClick(event) }

    useEffect(() => {
        if (logget) { getUsers() }
    }, []);

    return (
        <Box
            display={!logget ? "none" : "flex"}
            m="4px 0 0 0"
            height="75vh"
            sx={styleGridList}
        >
            <DataGrid
                checkboxSelection
                pageSize={15} // Número de filas por página
                //rowsPerPageOptions={[5, 10, 20]}
                columns={colums}
                rows={users}
                density="compact"
                disableRowSelectionOnClick
                // disableSelectionOnClick
                selectionModel={keysCellClick}
                onSelectionModelChange={(newSelectionModel) => setSelectionModel(newSelectionModel)}
                onRowClick={handleCellClick}

            />
        </Box>
    );
};

export default Listas;

