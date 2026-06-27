import React from 'react'

interface Props {
    title: string,
    description: string
}

function EachCard(props: Props) {
    const {title, description} = props

    return (
        <div className='w-full flex flex-col gap-2 max-w-70 h-48 max-h-50 p-7 bg-[#262626] rounded-[14px] '>
            <p className='text-[14px] font-semibold'>{title}</p>
            <p className='opacity-60'>
                {description}
            </p>
        </div>
    )
}

export default EachCard
