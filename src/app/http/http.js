import axios from "axios";
const $host = axios.create({
    baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles/',
})

const fetchData = async fetchFoo => {
    let response;
    try {
        response = await fetchFoo();
        // console.log(response)
    } catch (e) {
        console.log(e);
    }

    return response;
};

const GetMakesForVehicleTypeFun = async () => {
    const { data } = await $host.get("GetMakesForVehicleType/car?format=json");
    return data;
};


const GetMakesForVehicleType =() => fetchData(GetMakesForVehicleTypeFun) ;
const httpService = {
    GetMakesForVehicleType
}


// const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
// const response = await http('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2016?format=json');




    export {httpService}
