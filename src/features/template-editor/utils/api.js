import axios from "axios";

export const uploadImageCollection = async (value) => {
    const url = import.meta.env.VITE_NODE_ENV !== 'development' 
        ? `${import.meta.env.VITE_API_URL}/personal-area/upload-image-collection` 
        : 'http://localhost:5001/personal-area/upload-image-collection';
    const formData = new FormData();
    formData.append('file', value);
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            body: formData
        });
        const json = await response.json();
        if (json.status === 'ok'){
            console.log('ok')
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchThumbnailEdit = async (formData, changed, deleted) => {
    const data = formData.get('templateData');
    const parseData = JSON.parse(data);
    const web_id = parseData.id;
    try {
        const url = import.meta.env.VITE_NODE_ENV !== 'development' 
        ? `${import.meta.env.VITE_API_URL}/personal-area/upload-last-edit-image` 
        : 'http://localhost:5001/personal-area/upload-last-edit-image';

        const response = await fetch(url, {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            body: formData,
        });
        const json = await response.json();
        if (json.status === 'ok'){
            const urlUpdate  = import.meta.env.VITE_NODE_ENV !== 'development' 
            ? `${import.meta.env.VITE_API_URL}` 
            : 'http://localhost:5001';

            if (changed.categories.length === 0 && changed.products.length === 0 && deleted.categories.length === 0 && deleted.products.length === 0){
                console.log('No changes to save');
                return;
            } 
            // if (changed.categories.length > 0 || changed.products.length > 0){
            //     await axios.post(`${urlUpdate}/personal-area/product-list/edit`, {changed, web_id});
            //     console.log('There are changes to save');
            // }
            // if (deleted.categories.length > 0 || deleted.products.length > 0){
            //     await axios.post(`${urlUpdate}/personal-area/product-list/delete`, {deleted, web_id});
            //     console.log('There are deletions to save');
            // }
        if (changed.categories.length > 0 || changed.products.length > 0) {
            const response = await fetch(`${urlUpdate}/personal-area/product-list/edit`, {
                method: "POST",
                mode: "cors",
                credentials: "include", // if you need cookies
                body: JSON.stringify({ changed, web_id }),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`Edit request failed: ${response.status}`);
            }

            const data = await response.json();
            console.log("Changes saved:", data);
        }

        // Handle deletions
        if (deleted.categories.length > 0 || deleted.products.length > 0) {
            const response = await fetch(`${urlUpdate}/personal-area/product-list/delete`, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                body: JSON.stringify({ deleted, web_id }),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`Delete request failed: ${response.status}`);
            }

            const data = await response.json();
            console.log("Deletions saved:", data);
        }
            if (import.meta.env.VITE_NODE_ENV === 'development'){
                window.location.replace(`http://localhost:3000/editor/${web_id}`);
            } else {
                window.location.replace(`https://pagetos.com/editor/${web_id}`)
            }
            console.log('Thumbnail updated successfully');
        } else {
            console.error('Failed to update thumbnail:', json.message);
        }
    } catch (error) {        
        console.log(error);
    }
}