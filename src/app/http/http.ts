import axios from "axios";
import {decodeFromBase64} from "next/dist/build/webpack/loaders/utils";
const $host = axios.create({
    baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles/',
})

type FetchFunction = () => Promise<any>;

const fetchData = async (fetchFoo: FetchFunction) => {
    debugger
    let response;
    try {
        response = await fetchFoo();
        console.log(response)
    } catch (e) {
        console.log(e);
    }
    return response;
};

const getMakesForVehicleTypeFun = async () => {
    const { data } = await $host.get("getMakesForVehicleType/car?format=json");
    return data;
};

const getFetchVehicleDataFun = async (makeId:number ,year: number) => {
    const { data } = await $host.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    return data;
};



const getMakesForVehicleType =() => fetchData(getMakesForVehicleTypeFun) ;
const getFetchVehicleData = (makeId:number,year: number) => fetchData(()=>getFetchVehicleDataFun(makeId,year)) ;
const httpService = {
    getMakesForVehicleType,
    getFetchVehicleData
}

// const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getMakesForVehicleType/car?format=json');
// const response = await http('https://vpic.nhtsa.dot.gov/api/vehicles/getModelsForMakeIdYear/makeId/474/modelyear/2016?format=json');

export {httpService}
