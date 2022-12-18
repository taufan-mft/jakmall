import {MainWrapper, DropshipCheck, CheckWrapper} from "./styles";


const TitleHeader = () => {
    return (
        <MainWrapper>
            <div style={{position: 'relative'}}>
                <h1>Delivery details</h1>
                <div style={{
                    backgroundColor: 'rgba(238, 238, 238, 1)',
                    bottom: '8px',
                    position: 'absolute',
                    height: '8px',
                    width: '100%'
                }}>
                </div>
            </div>
            <CheckWrapper>
                <DropshipCheck>✔️</DropshipCheck>
                <label>Send as dropshipper</label>
            </CheckWrapper>
        </MainWrapper>
    )
}

export default TitleHeader;