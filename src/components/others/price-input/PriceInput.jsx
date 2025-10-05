import CurrencyInput from "react-currency-input-field";
import { PriceInputWrapper } from "./PriceInput.styled";


export default function PriceInput({prefix, price, style, handleEditMode, handleChangePrice, componentType = 'product'}){

    return (
        <PriceInputWrapper onClick={() => handleEditMode({mode: 'Text', type: 'price', component: componentType})}>
            <CurrencyInput
                style={style}
                prefix={prefix}
                defaultValue={0} 
                value={price}
                // decimalScale={1}
                // decimalSeparator=","
                decimalSeparator="," 
                groupSeparator="."
                onValueChange={(value) => handleChangePrice(value)}
            />
        </PriceInputWrapper>
    )
}