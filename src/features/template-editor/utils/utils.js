
export const randomId = () => {
    const baseNumber = Math.floor(Math.random() * 1234567);
    const middleNumber = Math.floor(Math.random() * 98765);
    const lastNumber = Math.floor(Math.random() * 16)
    const finalId = baseNumber.toString() + middleNumber.toString() + lastNumber.toString();
    return parseInt(finalId);
}

export const randomLink = () => {
    let link = '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < 10; i++){
        const randomIndex = Math.floor(Math.random() * 26);
        link += alphabet[randomIndex];
    }
    link += 'new';
    return link;
}

export const handleSave = (web_id, components, documentName, style, content, image, link) => {
        // const id = randomId()
        let data = {}
        if (link !== ''){
            data = {
                id: web_id,
                template_id: components.id,
                name: documentName,
                components_list: components.components.data,
                style: style,
                link: link,
                content: content,
                image: image
            }
        } else {
            const ranLink = randomLink();
            if (link){
                data = {
                    id: web_id,
                    template_id: components.id,
                    name: documentName,
                    link: link,
                    components_list: components.components.data,
                    style: style,
                    content: content,
                    image: image
                }
            } else {
                data = {
                    id: web_id,
                    template_id: components.id,
                    name: documentName,
                    link: ranLink,
                    components_list: components.components.data,
                    style: style,
                    content: content,
                    image: image
                }
            }
        };
        return JSON.stringify(data);
    }

    