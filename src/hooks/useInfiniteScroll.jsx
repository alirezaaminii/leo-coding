import {useEffect, useState} from 'react';

export function useInfiniteScroll(callback) {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (
                window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching
            )
                return;
            setIsFetching(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);

    useEffect(() => {
        if (!isFetching) return;
        callback(() => setIsFetching(false));
    }, [isFetching]);

    return [isFetching, setIsFetching];
}