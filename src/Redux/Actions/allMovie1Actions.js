import axios from "axios";
import { getAllMovie1Reducer, getAllMovie2Reducer, getAllMovie3Reducer } from "../Reducers/allmovies1Reducer";

export const getAllMovie1= () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key: '604903f555635f1a1b0968cd4bde010e',
                    page: '1'
                }
            }
        )
        dispatch(getAllMovie1Reducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getAllMovie2 = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key: '604903f555635f1a1b0968cd4bde010e',
                    page: '2'
                }
            }
        )
        dispatch(getAllMovie2Reducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getAllMovie3 = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key: '604903f555635f1a1b0968cd4bde010e',
                    page: '3'
                }
            }
        )
        dispatch(getAllMovie3Reducer(data))
    } catch (error) {
        throw(error)
    }
}