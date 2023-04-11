import { cache } from 'react';

export let fetching = cache(async () => {
    let response = await fetch('https://dummyjson.com/products');
    let data= await response.json();
    return data.products;
})