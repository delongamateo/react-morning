import React, { useState, useEffect } from 'react';

export default function MoviesListShort(props) {

    const [{loading, loaded, data}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = 'https://classes.codingbootcamp.cz/assets/classes/movie-api/top-movies.php';

    const loadData = async () => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null
            });

            const response = await fetch(url);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    console.log(data)


    let content = '';

    if (loading) {
        content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {
        content = (
            <>
                <ul>
                    {data.map((movie, i) => (
                        <li key={i}>
                            {movie.title}
                            <div className="rating">{movie.rating.toFixed(2)}</div>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    return (
        <section className="top-rated">

            <h2>Top rated movies & shows</h2>

            { content }

        </section>
    );
}