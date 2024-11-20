import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'

export default function ContactPage() {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(setPageTitle({ title : "Contact Page"}))
  }, [])
  

  
  return (
    <div className="hero h-4/5 bg-base-200">
      <h2>This is A Contact Page</h2>
    </div>
  )
}
