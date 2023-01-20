import axios from "axios";

const serachImages=async(term)=>{

   const response =await axios.get('https://api.unsplash.com//search/photos',{
     headers:{
        Authorization:'Client-ID mgVQ5jNTaCHCtIVYkPGRqdhqh0pAsBvVoAJyDEW0LpU'
     },
     params:{
        query:term,
     }

    })

     console.log(response.data.results);

    return response.data.results;

}

export default serachImages;
