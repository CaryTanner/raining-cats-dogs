const CAT_API_KEY='e39c7cf1-9e88-4f24-8e18-052c031f863f'
const DOG_API_KEY='a8c991ad-f8eb-4bf6-99ba-3b2d79ec3f12'

export const fetchCatBreeds = () => {
    return fetch('https://api.thecatapi.com/v1/breeds?api_key=' + CAT_API_KEY)
        .then(resp => resp.json())
        
}

export const fetchCatImage = (breed, count) => {
     return fetch('https://api.thecatapi.com/v1/images/search?' + CAT_API_KEY + '&breed_id=' + breed + "&limit=" + count)
        .then(resp => resp.json())
       
        
}

export const fetchDogBreeds = () => {
    return fetch('https://api.thedogapi.com/v1/breeds?api_key=' + DOG_API_KEY)
        .then(resp => resp.json())
        
}

export const fetchDogImage = (breed, count) => {
    return fetch('https://api.thedogapi.com/v1/images/search?breed_id=' + breed + "&limit=" + count + '&api_key=' + DOG_API_KEY)
        .then(resp => resp.json())
        
}
