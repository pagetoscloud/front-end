import { Screen, Scroll } from "./ScreenOne.styled";

export default function ScreenOne({children, mode, page}){
    return (
        <Screen 
            data-testid="screen-wrapper"
            style={mode === 'edit' &&  page !== 'page one' ? {overflow: 'hidden'} : {}}
        >
            {
                mode === 'edit' ?
                children :
                <Scroll>
                    {
                        children
                    }
                </Scroll>
            }
        </Screen>
    )
}