import base from "./base"
import axios from "@/utils/request.js"
const api={
    hotCity(){
        return axios.get(base.hotcity)
    }
}
export default api