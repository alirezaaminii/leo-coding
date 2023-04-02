import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import starredSlice from '../data/starredSlice'
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";
import '../styles/starred.scss'
import {useEffect, useMemo, useState} from "react";
import Movies from "./Movies";


const Starred = ({viewTrailer}) => {

    const pageSize = 5
    const [page, setPage] = useState(1)
    const state = useSelector((state) => state)
    const {clearAllStarred} = starredSlice.actions
    const totalLength = state.starred.starredMovies.length;
    const dispatch = useDispatch();

    const starredMovies = useMemo(
        () => state.starred.starredMovies.slice(0, page * pageSize),
        [page, state.starred.starredMovies]
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
        <div className="starred" data-testid="starred">
            {starredMovies.length > 0 && (<div data-testid="starred-movies" className="starred-movies">
                <h6 className="header">Starred movies</h6>
                <Movies movies={starredMovies} viewTrailer={viewTrailer}/>

                {isFetching && totalLength > starredMovies.length ? 'loading more items...' : null}

                <footer className="text-center">
                    <button className="btn btn-primary" onClick={() => dispatch(clearAllStarred())}>Remove all starred
                    </button>
                </footer>
            </div>)}

            {starredMovies.length === 0 && (<div className="text-center empty-cart">
                <i className="bi bi-star"/>
                <p>There are no starred movies.</p>
                <p>Go to <Link to='/'>Home</Link></p>
            </div>)}
        </div>
    )
}

export default Starred
