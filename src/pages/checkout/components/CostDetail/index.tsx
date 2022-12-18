import { MainWrapper } from "./styles";



const CostDetail = () => {
    return(
        <MainWrapper>
            <div>
                <span>Cost of goods</span>
                <span>Dropshipping Fee</span>
                <h2>Total</h2>
            </div>
            <div>
                <span className="bold">8,900</span>
                <span className="bold">8,900</span>
                <h2>505,900</h2>
            </div>
        </MainWrapper>
    )
}

export default CostDetail;