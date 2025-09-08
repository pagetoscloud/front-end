import { 
    CloseButton,
        ProfilePictureDisplay, SelectImageButton, SelectImageForm, SelectProfilePictureBox, 
        SelectProfilePictureWrapper 
} from "./SelectProfilePicture.styled";
import closeIcon from '../../../../assets/images/close-icon.png';

export default function SelectProfilePicture({personalData, handleChangePicture, handleChangeShowSelectProfile}){
    const handleInputImage = () => {
        document.getElementById("inputImage").click();
    }
    return (
        <SelectProfilePictureWrapper>
            <SelectProfilePictureBox>
                <CloseButton onClick={handleChangeShowSelectProfile}>
                    <img src={closeIcon} alt='close icon' />
                </CloseButton>
                <ProfilePictureDisplay>
                    {
                        personalData.profilePicture ?
                        <img src={personalData.profilePicture} alt='profile' />:
                        <h2>{personalData.username[0].toUpperCase()}</h2>
                    }
                </ProfilePictureDisplay>
                <SelectImageButton onClick={handleInputImage}>
                    <p>Select</p>
                </SelectImageButton>
                <SelectImageForm>
                    <input id="inputImage" type="file" onChange={(e) => handleChangePicture(e.target.files[0])}/>
                </SelectImageForm>
            </SelectProfilePictureBox>
        </SelectProfilePictureWrapper>
    )
}