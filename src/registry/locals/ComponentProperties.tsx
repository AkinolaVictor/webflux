import { get_component_data, pad_x } from '@/utils/helper'
import React from 'react'
import { LibraryBig } from 'lucide-react'
import EachProperty from './EachProperty'
import { usePathname } from 'next/navigation'


interface Props {}

function ComponentProperties(props: Props) {
    const {} = props
    const path = usePathname()
    if(path=="/components") return null
    
    
    const comp_data:any = get_component_data(path)
    if(!comp_data) return null

    return (
        <div className={``}>
            <div className='flex justify-between w-full items-center mt-10'>
                <p className='text-[18px] font-bold'>Props</p>
                <LibraryBig size={18}/>
                
            </div>
            <p className='text-[12px] opacity-50 text-justify mt-3'>
                Customize all the properties of this component. The default values are set in place,
                 but you can finetune each of them to suit your taste.
            </p>

            {
                comp_data?.props.map((item:any, index:number)=>{
                    return (
                        <EachProperty 
                            key={index}
                            item={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default ComponentProperties
