import {React, useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container} from '../components'
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
    }, [])

    if(posts.length === 0) {
        return (
            <div className='py-8 w-full'>
                <Container>
                    <h2 className='text-center text-2xl font-bold'>Login/SignUp to see blogs!</h2>
                </Container>
            </div>
        )
    }
  return (
    <h2 className='text-center text-2xl font-bold'>Welcome to Blog Sphere!</h2>
  )
}

export default Home


