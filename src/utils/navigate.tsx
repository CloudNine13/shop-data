import { NavigateFunction } from "react-router-dom"

export default (navigate: NavigateFunction) => {
    navigate(-1)
}