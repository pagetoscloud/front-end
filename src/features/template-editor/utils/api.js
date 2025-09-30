import axios from "axios";

export const uploadImageCollection = async (value) => {
    let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/auth/change-profile-picture';
    if (process.env.NODE_ENV === 'development'){
        url = 'http://localhost:5001/personal-area/upload-image-collection';
    }
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
        let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/personal-area/upload-last-edit-image';
        if (process.env.NODE_ENV === 'development'){
            url = 'http://localhost:5001/personal-area/upload-last-edit-image';
        }
        const response = await fetch(url, {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            body: formData,
        });
        const json = await response.json();
        if (json.status === 'ok'){
            if (changed.categories.length === 0 && changed.products.length === 0 && deleted.categories.length === 0 && deleted.products.length === 0){
                console.log('No changes to save');
                return;
            } 
            if (changed.categories.length > 0 || changed.products.length > 0){
                await axios.post('http://localhost:5001/personal-area/product-list/edit', {changed, web_id});
                console.log('There are changes to save');
            }
            if (deleted.categories.length > 0 || deleted.products.length > 0){
                await axios.post('http://localhost:5001/personal-area/product-list/delete', {deleted, web_id});
                console.log('There are deletions to save');
            }
            window.location.replace(`http://localhost:3000/editor/${web_id}`);
            console.log('Thumbnail updated successfully');
        } else {
            console.error('Failed to update thumbnail:', json.message);
        }
    } catch (error) {        
        console.log(error);
    }
}