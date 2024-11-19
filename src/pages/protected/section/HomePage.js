import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import FaceFrownIcon  from '@heroicons/react/24/solid/FaceFrownIcon'

function HomePage(){

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(setPageTitle({ title : ""}))
    //   }, [])

    return(
        <div className="hero h-4/5 bg-base-200">
           <h2>Welcome to Home Page to upload Img</h2>
        </div>
    )
}

export default HomePage
