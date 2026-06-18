import React from 'react'

interface Props {}

function ComponentIntro(props: Props) {
    const {} = props

    return (
        <div>
            <div className='my-10 mb-20'>
                <p className='text-[20px] my-5 font-bold'>Introduction</p>
                
                <p className='mb-5 opacity-80 text-[14px]'>
                    React Bits is an open-source collection of carefully designed UI components that aim to enhance your React web applications.
                </p>


                <p className='mb-5 opacity-80 text-[14px]'>
                    This is not your typical component library, which means you won't find a set of generic buttons, inputs, or other common UI elements here.
                </p>
            </div>

            <div className='my-10 mb-20'>
                <p className='text-[20px] my-5 font-bold'>Mission</p>
                
                <p className='mb-5 opacity-80 text-[14px]'>
                    React Bits is an open-source collection of carefully designed UI components that aim to enhance your React web applications.
                </p>


                <p className='mb-5 opacity-80 text-[14px]'>
                    This is not your typical component library, which means you won't find a set of generic buttons, inputs, or other common UI elements here.
                </p>
            </div>

            <div className='my-10 mb-20'>
                <p className='text-[20px] my-5 font-bold'>Approach</p>
                
                <p className='mb-5 opacity-80 text-[14px]'>
                    React Bits is an open-source collection of carefully designed UI components that aim to enhance your React web applications.
                </p>


                <p className='mb-5 opacity-80 text-[14px]'>
                    This is not your typical component library, which means you won't find a set of generic buttons, inputs, or other common UI elements here.
                </p>
            </div>

            <div className='my-10 mb-20'>
                <p className='text-[20px] my-5 font-bold'>Performance</p>
                
                <p className='mb-5 opacity-80 text-[14px]'>
                    React Bits is an open-source collection of carefully designed UI components that aim to enhance your React web applications.
                </p>


                <p className='mb-5 opacity-80 text-[14px]'>
                    This is not your typical component library, which means you won't find a set of generic buttons, inputs, or other common UI elements here.
                </p>
            </div>

            <div className='my-10 mb-20'>
                <p className='text-[20px] my-5 font-bold'>Components</p>
                
                {
                    ["Text", "Transition", "Slider", "Cursor", "Components"].map((item, index)=>{
                        return (
                            <div key={index} className='darkbg p-5 rounded-[14px] my-4'>
                                <p className='text-[15px] mb-3 font-bold'>{item}</p>
                                <p className=' opacity-80 text-[13px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dicta, enim repellendus perspiciatis qui explicabo! Maiores ratione minima commodi iste fugiat quisquam praesentium, omnis dignissimos reprehenderit ut corrupti sint necessitatibus.</p>
                            </div>
                        )
                    })
                }
            </div>

            
        </div>
    )
}

export default ComponentIntro
