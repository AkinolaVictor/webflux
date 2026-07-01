import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { ALargeSmall, Type } from "lucide-react";
import { TextEngineProps } from "../../engineProps/TextEngineProps"
import Text_Texter_Preview from "@/utils/component_previews/texts/Text_Texter_Preview";
import { getCode } from "@/utils/helper";

const usageFunc = (setState)=>getCode("/codes/text_fade_overlay/text_fade_overlay_usage.txt", setState)
const ts_tw = (setState)=>getCode("/codes/text_fade_overlay/text_fade_overlay_ts_tw.txt", setState)
const ts_cs = (setState)=>getCode("/codes/text_fade_overlay/text_fade_overlay_ts_cs.txt", setState)
const js_tw = (setState)=>getCode("/codes/text_fade_overlay/text_fade_overlay_js_tw.txt", setState)
const js_cs = (setState)=>getCode("/codes/text_fade_overlay/text_fade_overlay_js_cs.txt", setState)

export const texts_texter = {
    title: "Text Tester",
    href: "/components/text_tester",
    id: "text_texter",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    description: "This is a playground to test run several animations",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "does not apply",
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
    preview: Text_Texter_Preview,
    props: [
        ...TextEngineProps
    ]
}