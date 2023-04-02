import {useEffect, useState} from 'react';

export function useInfiniteScroll() {
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

    return [isFetching, setIsFetching];
}