import {useEffect,useState} from 'react'
import BlogList from '../components/Blogs/BlogList/BlogList'
import axios from 'axios'
import Banner from '../components/Banner/Banner'
import BlogCategory from '../components/Blog/BlogCategory/BlogCategory'
import { Typography } from '@mui/material'
import AboutUs from '../components/AboutUs/AboutUs'

const AllBlogs = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        console.log('First use effect with empty dependency array');
        setIsLoading(true);
        axios.get('http://localhost:8080/blogs')
          .then((res) => {
            setBlogList(() => [...res.data]);
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          })
          .finally(() => {
            setIsLoading(false);
        })
      }, []);
      if (isLoading) {
        return <p>Loading the data........</p>
      }
    
      if (error != null && isLoading == false) {
        return <p>Oops Something Went Wrong: { error }</p>
      }

    return (
        <>
         <Banner/>
         <Typography sx={{ width:'80vw', margin:'auto',marginTop:'20px', marginBottom:'5px'}} >
          <h1> Our Blogs </h1>
          </Typography>
         <BlogCategory/>
        <BlogList blogList={blogList}/>
        <AboutUs/>
        </>
    )
}

export default AllBlogs