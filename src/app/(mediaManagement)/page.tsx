"use client";
import { Box, Container } from "@mui/material"
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MainContent from "./_components/MainContent";
import { useState } from "react";

export default function Page() {
    const initialValue = {
        'topic' : '',
        'type' : {},
        'length' : ''
      }
      const [contentState, setContentState] = useState(initialValue)
      const handleSliderChange = (event: Event, newValue: number | number[]) => {
        
        setContentState(prev=>({
          ...prev,
          length : newValue as any
        }))
      };

      const onSubmit= () =>{
        alert(JSON.stringify(contentState))
      }
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
                <MainContent handleSliderChange={handleSliderChange} contentState={contentState} setContentState={setContentState}/>
            </Box>
            <Footer onSubmit={onSubmit} />
        </Container>

    )
}
