<<<<<<< HEAD
let __value = 42

const isomorphicFetch = jest.fn(() => __value)
isomorphicFetch.__setValue = v => __value = v
export default isomorphicFetch
=======
let __value = 42;
const isomorphicFetch = jest.fn(()=>__value);
isomorphicFetch.__setValue = v => __value = v;
export default isomorphicFetch;
>>>>>>> 91d231d262335527d06e0c1aba4adbd8898eec43
