"use client";
import { Box, Container } from "@mui/material"
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function MediaManagementLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <Container maxWidth="desktop" disableGutters sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    padding: {mobile : '32px 20px', tablet :  '64px 40px'},
                    backgroundColor: (theme) => theme.palette.background.default
                }}
            >
                {children}
            </Box>
            <Footer />
        </Container>

    )
}
