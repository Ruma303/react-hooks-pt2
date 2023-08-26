import React, { useState, useEffect } from 'react';

//* Custom Hook: personalizzazione titolo
/* export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
} */

//* Custom Hook: AJAX
/* export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return { data, loading };
} */


