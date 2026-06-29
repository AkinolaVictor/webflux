export interface TextProgression {
    text: string,
    scroll_con?: string,
    progression?: "char" | "word" | "line" | "char_line" | "word_line",
    style?: any,
    className?: string,
    children?: string,
    speed?: number,
    playOnScroll?: boolean | number | undefined,
    playInView?: boolean,
    delay?: number,
    timeline?: any,
    gsapScrollTrigger?: any,
    extendAnimation?: any,
    defaultAnimation?: any
}