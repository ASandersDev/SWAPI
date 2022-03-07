const axios = require('axios').default



const getData = async (apiParam) => {
    let url = `https://swapi.dev/api/${apiParam}`;
    console.log(url)

    try {
        let response = await axios.get(url)
        return response.data
        
    } catch (error) {
        console.log(error)
    }

}

export default getData