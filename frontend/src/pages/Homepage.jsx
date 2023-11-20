import React from "react";
import { TextField, Button, Box, FormControl } from "@mui/material"

const Homepage = () => {
    let lightGray = "#2c2f33"
    let darkGray = "#23272a"

    let styles = {
        loginContainer: {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: darkGray
        },

        loginForm: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: lightGray
        }
    }

    return (
        <Box style={styles.loginContainer}>
            <FormControl style={styles.loginForm}>
                <TextField id="outlined-basic" label="Username" variant="outlined" borderColor="white" />
                <Button variant="contained">Connect</Button>
            </FormControl>
        </Box>
    );
};

export default Homepage;
