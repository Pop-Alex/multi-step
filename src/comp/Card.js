import React from 'react'
import image from  "../assests/bg-sidebar-desktop.svg"
const Card = () => {
  return (
    <div className='card'>
        <div className="siderbar">
            <img className='sidebar-img' src={image} alt="img" />

            <div className='sidebar-info'>
                    <div className='group-sidebar'>
                    {[1,2,3,4].map((item)=>{
                        return( 
                            <div className='inner-info'>
                        <button className='button-sidebar'>{item}</button>
                        
                        </div>
                        )
                    })}
                    </div>
                    <div className='right-sidebar'>
                        <div className='info-group'>
                            <h2>Step 1</h2>
                            <h1>Select Plan</h1>
                        </div>
                        <div className='info-group'>
                            <h2>Step 1</h2>
                            <h1>Select Plan</h1>
                        </div>
                        <div className='info-group'>
                            <h2>Step 1</h2>
                            <h1>Select Plan</h1>
                        </div>
                        <div className='info-group'>
                            <h2>Step 1</h2>
                            <h1>Select Plan</h1>
                        </div>
                    </div>
            </div>
                
            
        </div>
        <div className='form'>
            <section>
                <h1>Personal Info</h1>
                <p>Please provide you name,email adress and phone number.</p>
            </section>
            <form className='from'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='e.g. Stephen King' />

                <label htmlFor="">Email Adress</label>
                <input type="text" placeholder='e.g. stephenking@lorem.com '  />

                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder='e.g. +1 234 567 8910' />
                    <div className='butoon'>
                <button type='submit' className='button-form'>Next step</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Card
