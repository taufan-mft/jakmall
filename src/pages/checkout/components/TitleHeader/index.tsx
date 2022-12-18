import { MainWrapper, DropshipCheck, CheckWrapper } from "./styles";



const TitleHeader = () => {
    return(
        <MainWrapper>
            <h1>Delivery details</h1>
            <CheckWrapper>
                <DropshipCheck>✔️</DropshipCheck>
                <label>Send as dropshipper</label>
            </CheckWrapper>
        </MainWrapper>
    )
}

export default TitleHeader;