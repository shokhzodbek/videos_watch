import axios from 'axios'

const request = axios.create({
      baseURL:'https://youtube.googleapis.com/youtube/v3/',
      params:{
            key:'AIzaSyD99UT0HplCxEiFZiK680ocUdRDqGIIdiA',

      }



})

export default request;