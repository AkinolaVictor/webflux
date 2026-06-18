import { pad_x } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <div className={`w-full ${pad_x} flex justify-center items-center py-9 bg-black`}>
            <p className='opacity-60'>
                Built by  
                <Link href={"https://google.com/"} className='opacity-100'>
                    &nbsp;victor_olaleykan
                </Link>. 
                The source code is available on 
                <Link href={"https://google.com"} className='opacity-100'>
                    &nbsp;GITHUB
                </Link>
            </p>
        </div>
    )
}

export default Footer
