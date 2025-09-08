import { HorizontalWrapper, InputEditorWrapper, LabelText, SelectEditorLarge, SelectEditorSmallMobile, VerticalWrapper } from "../../../../../assets/Global.styled";
import { StyleWrapper } from "./Style.styled";

export default function Space({handleChangeFontFamily, fontFamily, handleChangeFontSize, fontSize, handleChangeFontStyle, fontStyle}){
    return (
        <StyleWrapper>
            <InputEditorWrapper>
                <LabelText>Font Family</LabelText>
                <SelectEditorLarge>
                    <select value={fontFamily} onChange={(e) => handleChangeFontFamily(e.target.value)}>
                        <option>Lato</option>
                        <option>Noto Sans</option>
                        <option>Nunito</option>
                        <option>Open Sans</option>
                        <option>Orbitron</option>
                        <option>Roboto</option>
                        <option>Sour Gummy</option>
                    </select>
                </SelectEditorLarge>
                <HorizontalWrapper>
                    <VerticalWrapper>
                        <LabelText>Size</LabelText>
                        <SelectEditorSmallMobile>
                            <select value={fontSize} onChange={(e) => handleChangeFontSize(e.target.value)}>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>20</option>
                                <option>22</option>
                                <option>24</option>
                                <option>26</option>
                            </select>
                        </SelectEditorSmallMobile>
                    </VerticalWrapper>
                    <VerticalWrapper>
                        <LabelText>Style</LabelText>
                        <SelectEditorSmallMobile>
                            <select value={fontStyle} onChange={(e) => handleChangeFontStyle(e.target.value)}>
                                <option value={700}>Bold</option>
                                <option value={500}>Medium</option>
                                <option value={400}>Normal</option>
                                <option value={300}>Thin</option>
                                <option value={'underline'}>Underline</option>
                            </select>
                        </SelectEditorSmallMobile>
                    </VerticalWrapper>
                </HorizontalWrapper>
            </InputEditorWrapper>
        </StyleWrapper>
    )
}