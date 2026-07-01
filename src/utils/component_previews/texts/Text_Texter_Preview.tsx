import TextFadeOverlay from '@/registry/webflux/texts/TextFadeOverlay'
import TextTexter from '@/registry/webflux/texts/TextTexter'
import React from 'react'

interface Props {}

function Text_Texter_Preview(props: Props) {
    const {} = props
    
    return (
        <div className='w-full h-full'>
            
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    1/6
                </div>

                <TextTexter
                    useHtml='div'
                    className='text-[25px] font-bold text-center'
                    text={`
                        Text Fade Animation Preview Examples (keep scrolling)
                    `}
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    2/6
                </div>
                <TextTexter
                    progression="char"
                    className='text-[20px]'
                    style={{color: "yellow"}}
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
                <TextTexter
                    progression="char"
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
                <TextTexter
                    progression="line"
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
                <TextTexter
                    progression="char_line"
                    playOnScroll
                    className='w11:text-[20px]'
                    text={`
                        Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop.
                    `}
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    6/6
                </div>
                <TextTexter
                    className='text-[20px]'
                    playInView
                    text={`
                        The End
                    `}
                />
            </div>
        </div>
    )
}

export default Text_Texter_Preview
