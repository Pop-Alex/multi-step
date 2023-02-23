import React,{useState} from 'react'

const MultiForm = ({formStep}) => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const goFoward = ()=>{
        if(currentIndex === formStep - 1) return
        setCurrentIndex((prev) => prev +1)
    }

    const goBack = ()=>{
        if(currentIndex === 0 ) return
        setCurrentIndex((prev)=> prev - 1)
    }

  return {
    currentIndex,
    goFoward,
    goBack,
    isFirstStep:currentIndex ===0,
    isLastStep : currentIndex=== formStep-1,
  }
  
}

export default MultiForm
