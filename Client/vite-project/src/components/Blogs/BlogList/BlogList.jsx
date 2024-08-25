import React from 'react'
import Blog from '../BlogList/BlogList'
import  Grid  from '@mui/material/Grid'
import Box from '@mui/material/Box'


const BlogList = ({blogList}) => {
  return (
    <>
    <Box  sx={{ width:'80vw', margin:'0px auto'}}>
      
      <Grid container spacing={{ xs:2,md:3}}>
        {
         blogList.map((product,idx)=>{
            return(
              <Grid key={idx} item xs={12} md={6} lg={4}>
                <Blog
               id ={blog._id}
              name= {blog.name}
             
              desc={blog.desc}
              imageUrl={blog.imageUrl}
              />
              </Grid>

            )
          })
        }
      </Grid>

    </Box>
    </>
  )
}

export default BlogList;