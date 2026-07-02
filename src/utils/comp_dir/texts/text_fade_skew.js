import CodeBlock_Custom from "@/registry/locals/CodeBlock_Custom";
// import { TextEngineProps } from "@/registry/webflux/engines_js/TextEngine";
import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { ALargeSmall, Type } from "lucide-react";
import { TextEngineProps } from "../../engineProps/TextEngineProps"
import Text_Fade_Skew_Preview from "@/utils/component_previews/texts/Text_Fade_Skew_Preview";
import { getCode } from "@/utils/helper";

const usageFunc = (setState)=>getCode("/codes/text_fade_skew/text_fade_skew_usage.txt", setState)
const ts_tw = (setState)=>getCode("/codes/text_fade_skew/text_fade_skew_ts_tw.txt", setState)
const ts_cs = (setState)=>getCode("/codes/text_fade_skew/text_fade_skew_ts_cs.txt", setState)
const js_tw = (setState)=>getCode("/codes/text_fade_skew/text_fade_skew_js_tw.txt", setState)
const js_cs = (setState)=>getCode("/codes/text_fade_skew/text_fade_skew_js_cs.txt", setState)

export const texts_fade_skew = {
    title: "FadeSkew",
    href: "/components/text_fade_skew",
    id: "fade_skew",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    description: "Reveal text by adjusting the skewX and opacity values",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://webflux-rouge.vercel.app/r/TextFadeSkew.json",
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
    // similar: [
    //     {
    //         name: "FadeSkew 2",
    //         href: "/components/text_fade_skew_2"
    //     }
    // ],
    engine: "TextEngine",
    preview: Text_Fade_Skew_Preview,
    props: [
        ...TextEngineProps
    ]
}