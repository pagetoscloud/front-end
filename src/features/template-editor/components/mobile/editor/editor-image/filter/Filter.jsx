import { ImageBox, ImageFilterItems, ImageFilterList, ImageFilterWrapper } from "./Filter.styled";
import filterImageMockup from '../../../../../../../assets/images/fried-rice.jpg';

const filterList = [
    {name: 'normal', data: {type: 'none'}, style: 'none'},
    {name: 'BnW', data: {type: 'grayscale'}, style: 'grayscale(100%)'},
    {name: 'Sepia', data: {type: 'sepia'}, style: 'sepia(50%)'},
    {name: 'Hue', data: {type: 'hue-rotate'}, style: 'hue-rotate(50deg)'},
    // {data: {type: 'saturate'}, style: 'saturate(100%)'},
];

export default function Filter({imageFilter, handleChangeImageFilter}){
    return (
        <ImageFilterWrapper>
            <ImageFilterList>
                {
                    filterList.map(data => {
                        if (data.data.type === imageFilter){
                            console.log(true);
                        }
                        return (
                            <ImageFilterItems>
                                <ImageBox
                                    style={data.data.type === imageFilter ? {boxShadow: '0px 0px 0px 2px blue'} : {}}
                                >
                                    <img 
                                        style={{filter: data.style}}
                                        onClick={() => handleChangeImageFilter({data: data.data, style: data.style})}
                                        src={filterImageMockup}
                                        alt={data.data.type}
                                    />
                                </ImageBox>
                                <p>{data.name}</p>
                            </ImageFilterItems>
                        )
                    })
                }
                {/* <ImageFilterItems>
                    <img 
                        src={filterImageMockup} 
                        alt='filter mockup' 
                    />
                    <p>BnW</p>
                </ImageFilterItems>
                <ImageFilterItems>
                    <img 
                        style={{filter: 'grayscale(100%)'}}
                        src={filterImageMockup} 
                        alt='filter mockup' 
                    />
                    <p>BnW</p>
                </ImageFilterItems>
                <ImageFilterItems>
                    <img 
                        style={{filter: 'sepia(50%)'}}
                        src={filterImageMockup} 
                        alt='filter mockup' 
                    />
                    <p>Sepia</p>
                </ImageFilterItems>
                <ImageFilterItems>
                    <img 
                        style={{filter: 'hue-rotate(200deg)'}}
                        src={filterImageMockup} 
                        alt='filter mockup' 
                    />
                    <p>Invert</p>
                </ImageFilterItems> */}
            </ImageFilterList>
        </ImageFilterWrapper>
    )
}