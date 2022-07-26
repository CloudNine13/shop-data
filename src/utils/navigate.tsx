import { NavigateFunction } from "react-router-dom"

export default (navigate: NavigateFunction, to?: string, state?: Record<string, unknown>) => {
    if (!state) navigate(-1)
    if (to) navigate(to, state)
}