// import { useState } from "react";

// export function useChangeLinkPage(web_id) {
//     const [linkPage, setLinkPage] = useState('');
//     const handleChangeLinkPage = async (value) => {
//         setLinkPage(value);
//         let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/change-link';
//         if (import.meta.env.VITE_NODE_ENV === 'development'){
//             url = 'http://localhost:5001/personal-area/change-link';
//         }
//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 credentials: 'include',
//                 mode: 'cors',
//                 headers: {
//                     "Content-Type":"application/json"
//                 },
//                 body: JSON.stringify({link: value, web_id: web_id})
//             });
//             const json = await response.json();
//             if (json.status === 'ok'){
//                 console.log('ok');
//             }
//         } catch (error) {
//             throw error;
//         }
//     };

//     return {
//         linkPage,
//         setLinkPage,
//         handleChangeLinkPage
//     };
// }

import { useState } from "react";
import.meta.env.VITE_API_URL

export function useChangeLinkPage(web_id) {
  const [linkPage, setLinkPage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChangeLinkPage = async (value) => {
    setLinkPage(value);
    setLoading(true);
    setError(null);
    setSuccess(false);
    const url = `${import.meta.env.VITE_API_URL}/personal-area/change-link`;
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link: value, web_id }),
      });

      if (!response.ok) throw new Error("Network error");

      const json = await response.json();
      if (json.status === "ok") {
        setSuccess(true);
      } else {
        throw new Error(json.message || "Failed to update link");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    linkPage,
    setLinkPage,
    handleChangeLinkPage,
    loading,
    error,
    success,
  };
}