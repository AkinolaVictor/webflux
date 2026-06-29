import TextFade from '@/registry/webflux/texts/TextFade'
import TextFade_2 from '@/registry/webflux/texts/TextFade_2'
import TextRevealByHeightOverlay from '@/registry/webflux/texts/TextRevealByHeightOverlay'
import TextSkewFade from '@/registry/webflux/texts/TextSkewFade'
import React from 'react'

interface Props {}

function Text_Fade_Preview(props: Props) {
    const {} = props
    // const ext = {
    //     color: ["blue", "green"], 
    //     x: [100, 0]
    // }

    

    return (
        <div className='w-full h-full'>
            
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    1/6
                </div>
                <TextFade_2
                    progression="char"
                    scroll_con={'.component-preview-container'}
                    className='text-[25px] font-bold text-center'
                    extendAnimation={{
                        color: ["blue", "yellow"],
                        // x: [100, 0],
                        // y: [100, 0],
                        // skewX: [70, 0]
                    }}
                    text={`
                        Text Fade Animation Preview Examples (keep scrolling)
                    `}
                />
                {/* <TextFade_2
                    progression="char"
                    scroll_con={'.component-preview-container'}
                    className='text-[25px] font-bold text-center'
                    text={`
                        (keep scrolling)
                    `}
                /> */}
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    2/6
                </div>
                <TextFade_2
                    progression="char"
                    scroll_con={'.component-preview-container'}
                    className='text-[20px]'
                    playInView
                    text={`
                        This text automatically animates each time it's scrolled to view from the bottom
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    3/6
                </div>
                <TextFade_2
                    progression="char"
                    scroll_con={'.component-preview-container'}
                    className='w11:text-[20px]'
                    playOnScroll
                    text={`
                        This text responds directly to your scrolling. As you scroll, more of the content is gradually revealed, creating a smooth, interactive reading experience. Stop scrolling, and the animation pauses instantly. The farther you scroll, the more you uncover; scroll less, and only part of the text is revealed.
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    4/6
                </div>
                <TextFade_2
                    progression="line"
                    scroll_con={'.component-preview-container'}
                    playOnScroll
                    className='w11:text-[20px]'
                    text={`
                        Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.
                    `}
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    5/6
                </div>
                <TextFade_2
                    progression="char_line"
                    scroll_con={'.component-preview-container'}
                    playOnScroll
                    className='w11:text-[20px]'
                    // speed={9}
                    // extendAnimation={{
                    //     color: ["blue", "yellow"],
                    //     x: [100, 0],
                    //     y: [100, 0],
                    //     skewX: [70, 0],
                    //     // opacity: [100, 100],
                    // }}
                    text={`
                        Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop.
                    `}
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    6/6
                </div>
                <TextFade_2
                    className='text-[20px]'
                    scroll_con={'.component-preview-container'}
                    playInView
                    text={`
                        The End
                    `}
                />
            </div>

            {/* <div className='w-full h-full flex flex-col justify-center items-center relative p-10'>
                <TextFade
                    scrub
                    scroll_con={'.component-preview-container'}
                    children={<p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quos natus tenetur sunt? Magni tempore modi consequuntur error, qui, similique fuga assumenda velit corrupti impedit reiciendis aperiam nisi ipsum, dolorum veniam quaerat ut laborum reprehenderit temporibus? Expedita, dicta sequi quod nam inventore dolorum maiore
                    </p>}
                />
            </div>

            <div className='h-full w-full flex flex-col justify-center items-center'>
                <TextSkewFade
                    scrub
                    scroll_con={'.component-preview-container'}
                    text='This is what you see when scrub is true'
                />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center relative p-10'>
                <TextRevealByHeightOverlay 
                    scroll_con={'.component-preview-container'}
                    text={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit enim obcaecati eligendi in, aliquam quaerat atque quas ipsa minima fugiat quam quis temporibus iste? Exercitationem nulla quod doloribus ab. amet consectetur adipisicing elit. Magni sit enim obcaecati eligendi in, aliquam quaerat atque quas
                    `}
                />
            </div> */}
        </div>
    )
}

export default Text_Fade_Preview
