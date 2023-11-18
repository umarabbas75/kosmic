"use client";
import { AppBar, Box, Container, Paper, Toolbar, Typography } from "@mui/material"
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function MediaManagementLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <Container maxWidth="desktop" disableGutters sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           
          

            <Header/>
            
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    padding: '64px 40px',
                    backgroundColor: (theme) => theme.palette.background.default
                }}
            >

                {children}

            </Box>

            {/* Footer */}
           <Footer/>
        </Container>

    )
}
