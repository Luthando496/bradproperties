"use client"

import ClipLoader from "react-spinners/ClipLoader"


const LoadingPage = () => {
  return (
      <ClipLoader color="#235790" 
      cssOverride={{display:"block",margin:"100px auto"}} 
      size={150} a
      ria-label="loading-spinner" />
  )
}

export default LoadingPage
