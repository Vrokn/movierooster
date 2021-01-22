import React, { useState, useEffect } from 'react';
import { Pagination, Card, Rating, Label, Dropdown } from 'semantic-ui-react'

export function Top(language) {
    const [movies, setMovies] = useState(['']);
    const [genres, setGenres] = useState(['']);
    const [hasError, setHasError] = useState(false);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);
    const apikey = 'api_key=9ebb3ffadcb7802418b60d473c655910';
    const base = 'https://api.themoviedb.org/3/movie';
    const imagebase = 'https://image.tmdb.org/t/p/w500/';
    let listPath = window.location.pathname;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?${apikey}&language=${language}`)
            .then(response => response.json())
            .then((data) => {
                setGenres(data.genres);
            }).catch(err => setHasError(true))
        fetch(`${base}${listPath}?${apikey}&language=${language}&page=${page}`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.results);
                setPages(data.total_pages);
                window.scrollTo(0, 0);
            }).catch(err => setHasError(true))
    }, [setMovies, setHasError, setPages, page, setGenres])

    return (
        <>
            <Card.Group itemsPerRow={5} centered doubling >
                {hasError ? <div>Error occured.</div> : (movies.map((d) => {
                    let movieGenres = ['no_genre'];
                    if (d.genre_ids) {
                        movieGenres = d.genre_ids
                    }
                    let filteredTerms = genres.filter((data) => {
                        return movieGenres.includes(data.id)
                    })
                    return (<Card image={`${imagebase}${d.poster_path}`} color='red'
                        header={<Dropdown text={d.title} fluid compact selection >
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    {d.title !== d.original_title ? d.original_title : null}
                                    <p><Rating rating={Math.round(d.vote_average / 2)} maxRating={5} disabled />{d.vote_average}</p>
                                    {filteredTerms.map((post) => <Label color={'grey'} size={'mini'} circular >{post.name}{' '}</Label>)}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        }/* 
                        extra={filteredTerms.map((post) => <Label color={'grey'} size={'mini'} circular >{post.name}{' '}</Label>)}
                        description={< p > <Rating rating={Math.round(d.vote_average / 2)} maxRating={5} disabled />{d.vote_average}</p>}
                        meta={d.title !== d.original_title ? d.original_title : null}  *//>)
                }
                ))}
            </Card.Group>
            <br></br>
            <Pagination
                borderless
                boundaryRange={0}
                defaultActivePage={page}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={pages}
                activePage={page}
                onPageChange={(e, pageInfo) => { setPage(pageInfo.activePage) }}
            />
        </>

    )
}
