import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import "./BlogCategory.css"

const BlogCategory = () => {
    return (
        <Box sx={{width:'80vw', margin:'40px auto'}}>
             <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid  item xs={12} md={6} lg={4}>
                    <Card className='blogCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Latest Code
                            </Typography>
                            <Typography component="p" color="gray">
                                Top Projects
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card className='productCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZGV8ZW58MHx8MHx8fDA%3D.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Hackathon
                            </Typography>
                            <Typography component="p" color="gray">
                                Top Codes
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card className='productCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            GROUP Project 
                            </Typography>
                            <Typography component="p" color="gray">
                                Top Code
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
      </Box>

  )
}

export default BlogCategory;