import { useState, useEffect } from 'react';
import { getPokedex, getTypes } from '../services/pokedex-service.js';

export function useTypes() {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //populate the dropdown on page load
    const fetch = async () => {
      const { data, error } = await getTypes();
      setTypes(data);
      setError(error);
    };

    fetch();
  }, []);

  return { types, error };
}

export function usePokedex(searchParams) {
  //searchQuery = the state stored in the url
  const searchQuery = searchParams.toString();
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState([]);
  const [query, setQuery] = useState(searchQuery);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = useState(25);

  useEffect(() => {
    //on load: page 1, search query in state, empty pokedex
    setQuery(searchQuery);
    setPage(1);
    setPokedex([]);
  }, [searchQuery]);

  useEffect(() => {
    //when we load a new page by scrolling:
    const fetch = async () => {
      const { data = {}, error } = await getPokedex(
        //get page X of the results for the search, store as 'data'
        searchParams,
        page
      );

      if (data) {
        setCount(data.count);
        setPage(page);
        setError(null);

        //pokedex is either initialized if it's page 1
        //or added to if we're past that
        if (page === 1) {
          setPokedex(data.results);
        } else {
          setPokedex((pokedex) => [...pokedex, ...data.results]);
        }
      }

      if (error) {
        setError(error);
      }
    };

    fetch();
  }, [query, page]);

  const addPage = () => {
    //if we have more results than we show on this page, set page one higher
    // which retriggers the useEffect and loads the rest of them
    setPage((page) => (page * perPage > count ? page : page + 1));
  };

  return { pokedex, error, addPage };
}
