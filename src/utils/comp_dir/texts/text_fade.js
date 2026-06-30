import CodeBlock_Custom from "@/registry/locals/CodeBlock_Custom";
// import { TextEngineProps } from "@/registry/webflux/engines_js/TextEngine";
import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { ALargeSmall, Type } from "lucide-react";
import { TextEngineProps } from "../../engineProps/TextEngineProps"

async function getCode(path, func){
    const res = await fetch(path)
    const text = await res.text()
    console.log({text})
    if(func) func(text)
    return text
}

const usageFunc = (setState)=>getCode("/codes/text_fade/text_fade_usage.txt", setState)
const ts_tw = (setState)=>getCode("/codes/text_fade/text_fade_ts_tw.txt", setState)
const ts_cs = (setState)=>getCode("/codes/text_fade/text_fade_ts_cs.txt", setState)
const js_tw = (setState)=>getCode("/codes/text_fade/text_fade_js_tw.txt", setState)
const js_cs = (setState)=>getCode("/codes/text_fade/text_fade_js_cs.txt", setState)

export const texts_fade = {
    title: "Fade",
    href: "/components/text_fade",
    id: "main2",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    description: "Reveal text by making it to fade in and out",
    concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://webflux-rouge.vercel.app/r/TextFade.json",
            usage: usageFunc
        },
        rawcode: {
            dependencies: "npm install gsap",
            codes: {
                ts_tw,
                ts_cs,
                js_tw,
                js_cs
            }
        }
    },
    engine: "TextEngine",
    preview: Text_Fade_Preview,
    props: [
        ...TextEngineProps
    ]
}