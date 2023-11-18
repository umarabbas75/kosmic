'use client'
import { Autocomplete, Box, List, ListItem, Slider, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import contentData from './data';

type Topic = keyof typeof contentData;
const MainContent = ({handleSliderChange,contentState,setContentState} : any) => {
  const theme = useTheme()
  // const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>()
 
 
  return (
    <>
      <Box sx={{ padding: '20px 0px', borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="h5" sx={{
          fontWeight: 500, mb: 1, fontSize: {
            mobile: '1.25rem',
            tablet: '1.5rem',

          },
        }}>Content type</Typography>
        <Typography variant="subtitle1" color="textSecondary">Choose a content type that best fits your needs.</Typography>
      </Box>

      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 4 }}>What type of content are you creating?</Typography>

        <Box sx={{ display: 'flex', gap: { mobile: '5px', tablet: '10px' }, flexWrap: 'wrap' }}>
          {Object.keys(contentData).map((topic) => (
            <Box key={topic} onClick={() => {
             
              setContentState((prev : any)=>({
                ...prev,
                topic,
                type : {}
              }))
            }} >
              <Box sx={{
                borderRadius: '30px',
                backgroundColor: (topic === contentState.topic) ? theme.palette.primary.main : 'transparent',
                padding: '14px 28px', cursor: 'pointer', border: `1px solid ${theme.palette.divider}`, '&:hover': {
                  background: theme.palette.primary.main,
                },
              }} >

                <Typography variant="subtitle2">{topic}</Typography>
              </Box>

            </Box>
          ))}
        </Box>

        <Box sx={{ marginTop: '30px' }}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 4 }}>
            Which type of "{contentState.topic}" content do you want to create?
          </Typography>
          <div>
            <Autocomplete
              disablePortal
              id="search-topic"
            
              options={contentState.topic ? contentData[contentState.topic] : []}
              onChange={(e,value : any)=>{
                setContentState((prev : any)=>({
                  ...prev,
                  type : value
                }))
              }}
              sx={{ maxWidth: '512px' }}
              renderOption={(props, option) => {
               
               //@ts-ignore
                return <Box  {...props} sx={{background : '#3A394080'}} >{option.title}</Box>
              }}
              getOptionLabel={(option) => option?.title || ''}
              renderInput={(params) => <TextField value={contentState.type} variant="standard" {...params} label="Search" />}
            />
          </div>

        </Box>

        <Box sx={{ marginTop: '30px' }}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 4 }}>
            Set the number of words for output text.
          </Typography>
          <Box sx={{padding : '20px',backgroundColor : theme.palette.background.paper,maxWidth : '510px',borderRadius : '8px',display : 'flex', gap : '20px',alignItems : 'center'}}>
            <Typography variant='subtitle2' >100</Typography>
          <Slider  onChange={handleSliderChange}  sx={{flex : 1}} defaultValue={700} aria-label="Default" valueLabelDisplay="auto" min={100}
            max={1000} />
             <Typography variant='subtitle2' >1000</Typography>
          </Box>
         

        </Box>




      </Box>
    </>
  )
}

export default MainContent