"use client";
import { AppBar, Box, Container, Paper, Toolbar, Typography } from "@mui/material"
import Header from "./_components/Header";

export default function MediaManagementLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <Container maxWidth="xl" disableGutters sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           
          

            <Header/>
            
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    padding: '24px',
                    backgroundColor: (theme) => theme.palette.background.default
                }}
            >

                {children}

            </Box>

            {/* Footer */}
            <Paper elevation={0} square >
                <Toolbar>
                    <Typography variant="body2">
                        Your Footer
                    </Typography>
                </Toolbar>

            </Paper>
        </Container>

    )
}
