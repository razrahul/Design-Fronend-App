import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import HomeIcon  from '@heroicons/react/24/solid/HomeIcon'

function HomePage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Home Page"}))
      }, [])

    return(
        <div className="hero h-4/5 bg-base-200">
           <h2>Welcome to Home Page to upload Img</h2>
           <HomeIcon className="h-5 w-5" />
        </div>
    )
}

export default HomePage
