export const deletePageCollection = async (value) => {
    let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/auth/change-profile-picture';
    if (process.env.NODE_ENV === 'development'){
        url = 'http://localhost:5001/personal-area/template-editor/delete-collection';
    }
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
            window.location.replace(`http://localhost:3000/collection`);
        } else {
            console.error('Delete failed:', json);
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}