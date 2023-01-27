import React from 'react'

const Pdf = () => {
  return (
    <div className='min-h-[85vh] w-full'>
        <object 
        data={require('../docs/CV-Dante-Nicolas-Kaddarian.pdf')}
        type="application/pdf"
        className='h-[100vh] w-full'
        >
            
        </object>
    </div>
  )
}

export default Pdf