import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import watchLaterSlice from '../data/watchLaterSlice'
import '../styles/starred.scss'
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";
import {useEffect, useMemo, useState} from "react";
import Movies from "./Movies";

const WatchLater = ({viewTrailer}) => {

    const pageSize = 5
    const [page, setPage] = useState(1)
    const state = useSelector((state) => state)
    const {watchLater} = state
    const {remveAllWatchLater} = watchLaterSlice.actions
    const totalLength = watchLater.watchLaterMovies.length;
    const dispatch = useDispatch()

    const watchLaterMovies = useMemo(
        () => state.watchLater.watchLaterMovies.slice(0, page * pageSize),
        [page, state.watchLater.watchLaterMovies]
    );

    const [isFetching, setIsFetching] = useInfiniteScroll();

    const fetchMoreData = () => {
        setIsFetching(false)
        setPage(page + 1)
    };

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreData()
    }, [isFetching]);

    return (
        <div className="starred" data-testid="watch-later-div">
            {watchLaterMovies.length > 0 && (<div data-testid="watch-later-movies" className="starred-movies">
                <h6 className="header">Watch Later List</h6>
                {/*<div className="movies">*/}
                {/*    {watchLaterMovies.map((movie) => (*/}
                {/*        <Movie*/}
                {/*            movie={movie}*/}
                {/*            key={movie.id}*/}
                {/*            viewTrailer={viewTrailer}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}
                <Movies movies={watchLaterMovies} viewTrailer={viewTrailer}/>

                {isFetching && totalLength > watchLaterMovies.length ? 'loading more items...' : null}

                <footer className="text-center">
                    <button className="btn btn-primary" onClick={() => dispatch(remveAllWatchLater())}>Empty list
                    </button>
                </footer>
            </div>)}

            {watchLaterMovies.length === 0 && (<div className="text-center empty-cart">
                <i className="bi bi-heart"/>
                <p>You have no movies saved to watch later.</p>
                <p>Go to <Link to='/'>Home</Link></p>
            </div>)}
        </div>
    )
}

export default WatchLater
