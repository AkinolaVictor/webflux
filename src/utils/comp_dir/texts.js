import { ALargeSmall, Type } from "lucide-react";
import {texts_fade} from "./texts/text_fade"
import {texts_fade_overlay} from "./texts/text_fade_overlay"
import {texts_fade_skew} from "./texts/text_fade_skew"
import {texts_fade_skew_2} from "./texts/text_fade_skew_2"
import {texts_texter} from "./texts/text_texter"
import {overlay_reveal} from "./texts/overlay_reveal"

export const texts = {
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    // Icon: ()=><ALargeSmall size={"13px"}/>,
    content: [
        texts_fade,
        texts_fade_overlay,
        texts_fade_skew,
        texts_fade_skew_2,
        // texts_texter,
        overlay_reveal,
        // {
        //     title: "Text Fadez",
        //     href: "/components/text_fadez",
        //     id: "lsd3"
        // },
        // {
        //     title: "Text By Height",
        //     href: "/components/text_height",
        //     id: "main_4"
        // },
    ]
}