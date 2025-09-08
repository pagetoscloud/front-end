import { useState } from "react";

export function useChangeLinkPage(web_id) {
    const [linkPage, setLinkPage] = useState('');
    console.log(linkPage)
    const handleChangeLinkPage = async (value) => {
        setLinkPage(value);
        let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/change-link';
        if (process.env.NODE_ENV === 'development'){
            url = 'http://localhost:5001/personal-area/change-link';
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                credentials: 'include',
                mode: 'cors',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({link: value, web_id: web_id})
            });
            const json = await response.json();
            if (json.status === 'ok'){
                console.log('ok');
            }
        } catch (error) {
            throw error;
        }
    };

    return {
        linkPage,
        setLinkPage,
        handleChangeLinkPage
    };
}