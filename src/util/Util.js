const Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk3N2RmZTMzOWY5YWNkZDgzOTNjMzNkMjc4ZGY5MCIsInN1YiI6IjY1OWNlM2Y4YjZjZmYxMDE0Y2Y3Mzk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WRLg0jmmCT2mrtyWHelKS2MlgxE-PF1BEkqjSLzw0KM"

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchApiData = async (url,params)=>{
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers : {
                Authorization: "bearer " + Token,
            },
            params
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}
