import { useWindowSize } from "../../../../hooks/useWindowSize";
import { MockupWrapper } from "./Mockup.styled";

export default function Mockup({screenMode}){
    const size = useWindowSize();
    if (size[1] < 600){
        if (screenMode === 'full-mobile' || screenMode === 'full-desktop'){
            return (
                <MockupWrapper 
                style={{
                    height: size[0],
                    width: '100%',
                    // margin: '30px 0',
                    // borderRadius: '20px'
                }}
                src="/render"
                >
                </MockupWrapper>
            )
        } else {
            return (
                <MockupWrapper 
                style={{
                    height: size[0] - 120,
                    width: '90%',
                    margin: '30px 0',
                    borderRadius: '20px'
                }}
                src="/render"
                >
                </MockupWrapper>
            )
        }
    } else {
        if (screenMode === 'mobile'){
            return (
                <MockupWrapper 
                style={{
                    height: size[0] - 120,
                    width: 340,
                    margin: '30px 0',
                    borderRadius: '20px'
                }}
                src="/render"
                >
                </MockupWrapper>
            )
        } else if (screenMode === 'full-mobile'){
            return (
                <MockupWrapper 
                style={{
                    height: size[0],
                    width: '340px',
                    // margin: '10px 0',
                    // borderRadius: '20px'
                }}
                src="/render"
                >
                </MockupWrapper>
            )
        } else if (screenMode === 'desktop'){
            return (
                <MockupWrapper 
                style={{
                    height: size[0] - 120,
                    width: '95%',
                    margin: '30px 0',
                    borderRadius: '20px'
                }}
                src="/render"
                >
                </MockupWrapper>
            )
        } else if (screenMode === 'full-desktop'){
            return (
                <MockupWrapper 
                style={{
                    height: "100%",
                    width: '100%',
                    // margin: '30px 0',
                    // borderRadius: '20px'
                }}
                src="/render"
                >
                </MockupWrapper>
            )
        } 
    }
}