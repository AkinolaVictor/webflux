import ComponentDetails from '@/registry/locals/ComponentDetails'
import ComponentIntro from '@/registry/locals/ComponentIntro'
import ComponentMenu from '@/registry/locals/ComponentMenu'
import ComponentProperties from '@/registry/locals/ComponentProperties'
import Footer from '@/registry/locals/Footer'
import TopHeader from '@/registry/locals/home/TopHeader'
import { pad_x, pad_x_2 } from '@/utils/helper'
import { ChevronUp, CodeXml, Copy, Eye } from 'lucide-react'
import Head from 'next/head'
import { usePathname, useRouter } from 'next/navigation'
// import React from 'react'
import { useSelector } from 'react-redux'

interface Props {}

function Components(props: Props) {
    const {} = props
    const {header_height} = useSelector((state:any)=>state.generalSlice)
    // const router = useRouter()
    const path = usePathname()
    // bg-[#0a0a0a]
    // console.log({header_height})
    
    return (
        <div 
            className={`bg-black `}
        >
            <Head>
                <title>Webflux || Components</title>
                <meta name="description" content="The webflux components page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            <div 
                className={`w-full h-full bg-black flex`}
                style={{
                    height: `calc(100% - ${header_height})`
                }}
            >
                <div 
                    style={{maxHeight: `calc(100vh - ${header_height}px)`}}
                    className={`hidden w10:flex flex-col w-full max-w-70 h-auto p-2 overflow-y-auto ${pad_x}`}
                >
                    <ComponentMenu />
                    <div className='w-full min-h-30'></div>
                </div>

                <div 
                    style={{
                        maxHeight: `calc(100vh - ${header_height}px)`,
                        height: `calc(100vh - ${header_height}px)`
                    }}
                    className={`w-full overflow-y-auto ${pad_x_2} relative`}
                >
                    {
                        path=="/components"?
                        <ComponentIntro />:
                        <ComponentDetails />
                    }
                    <Footer />

                    {/* <div className='fixed bottom-5 left-1/2 -translate-x-1/2 darkbg w-13 h-13 rounded-full w10:hidden flex justify-center items-center'>
                        <ChevronUp />
                    </div> */}
                    <div className='min-h-20 w-full' />
                </div>

                <div 
                    style={{maxHeight: `calc(100vh - ${header_height}px)`}}
                    className={`hidden w10:flex flex-col w-full max-w-70 h-auto p-2 overflow-y-auto ${pad_x}`}
                >
                    <ComponentProperties />
                    <div className='w-full min-h-30'></div>
                    {/* <div className='w-full min-h-screen bg-blue-400'></div> */}
                    {/* <div className='w-full min-h-screen'></div> */}
                </div>
            </div>
        </div>
    )
}

export default Components
