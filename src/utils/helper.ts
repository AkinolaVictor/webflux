import { components_directories } from "./comp_dir/components_directories"

// export const pad_x = "px-6 w7:px-10"
export const pad_x = "px-6"
export const pad_x_2 = "px-6 w7:px-10 w10:px-12"


export function get_component_data(this_path:string){
    const data = components_directories
    for(let i=0; i<data.length; i++){
        const this_data = data[i]
        const content = this_data.content
        for(let j=0; j<content.length; j++){
            const this_content = content[j]
            if(this_content.href === this_path){
                return this_content
            }
        }
    }

    return null
}

export async function getCode(path:string, func:any){
    const res = await fetch(path)
    const text = await res.text()
    if(func) func(text)
    return text
}