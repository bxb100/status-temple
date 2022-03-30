import data from '../data/mock.json';

export default async function fetchData() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // return data;
    return fetch('https://stripe-status.bxb100.workers.dev/')
    .then(res => res.json())
}
