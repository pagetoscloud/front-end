export const deletePageCollection = async (value) => {
    const url = import.meta.env.VITE_NODE_ENV !== 'development' 
    ? `${import.meta.env.VITE_API_URL}/personal-area/template-editor/delete-collection`
    : 'http://localhost:5001/personal-area/template-editor/delete-collection';

    console.log(url);
    console.log(value);
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: value }),
        });

        if (!response.ok) {
            // e.g. 401, 404, 500
            throw new Error(`Server error: ${response.status}`);
        }

        const json = await response.json();
        if (json.status === 'ok') {
            // console.log('Deleted successfully');
            if (import.meta.env.VITE_NODE_ENV === 'development'){
                window.location.replace(`http://localhost:3000/collection`);
            } else {
                window.location.replace(`https://pagetos.com/collection`);
            }
        } else {
            console.error('Delete failed:', json);
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}