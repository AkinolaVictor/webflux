import { ALargeSmall, Type } from "lucide-react";
import {texts_fade} from "./texts/text_fade"
import {texts_skew_fade} from "./texts/text_skew_fade"
import {overlay_reveal} from "./texts/overlay_reveal"

export const texts = {
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    // Icon: ()=><ALargeSmall size={"13px"}/>,
    content: [
        texts_fade,
        texts_skew_fade,
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