import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Wrapper, DetailContainer, DetailView, Image, A } from "./Detail.styled"
import mockData from '../../../../utils/mockItem.json'

interface Obj {
    Name: string,
    Description: string,
    Price: number,
    Image: string
}

const Detail: React.FC = () => {
    const [data, setData] = useState(mockData)
    const navigate = useNavigate()
    const loc = useLocation().state as Obj
    document.title = "Item detail"

    useEffect(() => {
        if(!loc) navigate('/')
        setData(loc)
    }, [])

    return (
        <Wrapper>
            <DetailContainer>
                <Image src={data.Image}  />
                <DetailView>
                    <A>{data.Name}</A>
                    <a>${data.Price}</a>
                    <A>{data.Description}</A>
                    <a>TEST</a>
                    <a>TEST</a>
                </DetailView>
            </DetailContainer>
        </Wrapper>
    )
}

export default Detail