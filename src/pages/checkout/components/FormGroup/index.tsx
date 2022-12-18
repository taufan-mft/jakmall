import Input from "./components/Input";
import { MainWrapper } from "./styles";




const FormGroup = () => {
 return(
     <MainWrapper>
         <Input />
         <Input isSmall={true} />
         <Input />
         <Input isSmall={true} />
         <Input />
     </MainWrapper>
 )
}

export default FormGroup;