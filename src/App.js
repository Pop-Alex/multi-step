import React, { Component } from 'react'
import Card from './comp/Card';
import MultiForm from './hooks/MultiForm'

function App() {
  const {
  currentIndex,
  goFoward,
  goBack,
  isFirstStep,
  isLastStep, } = MultiForm([])

  return (
    <div>
      {currentIndex === 0 && <Card></Card>}
      {!isFirstStep && (<button onClick={goBack}>Go Back</button>)}
      <button onClick={goFoward}>{isLastStep ? "Confirm":"Next Step"}</button>
    </div>
  );
}

export default App;
