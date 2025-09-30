import { useState } from "react";
import { TitlePageH2 } from "../../../../assets/Global.styled";
// import profileIcon from '../../../../assets/images/account.png';
import { 
    ButtonWrapper,
    EditButton, HorizontalWrapper, 
    InputSetting, LabelInput, 
    LogoutButton, 
    ProfilePicture, 
    SettingFormWrapper
} from "./SettingForm.styled";
import { useDispatch } from "react-redux";
import { changeUsername } from "../../accountDataSlice";

export default function SettingForm({personalData, handleChangeShowSelectProfile, handleChangeShowEmailVerification, handleLogout}){
    const [username, setUsername] = useState(personalData.username);
    const [password, setPassword] = useState(personalData.password);
    const [email, setEmail] = useState(personalData.email);
    const [accountType, setAccountType] = useState(personalData.accountType);
    const [editInput, setEditInput] = useState(false);
    const dispatch = useDispatch();
    const handleClickUsername = async () => {
        try {
            let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/auth/change-username';
            if (process.env.NODE_ENV === 'development'){
                url = 'http://localhost:5001/auth/change-username';
            }
            const response = await fetch(url, {
                method: "POST",
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username
                })
            });
            if (response.status === 200){
                const json = await response.json();
                if (json.status === 'ok'){
                    dispatch(changeUsername(username));
                }
            }
        } catch (error) {
            throw error;
        }
        // dispatch(changeUsername(username));
    }
    const handleChangePassword = (e) => {
        setPassword(e);
    }
    const handleChangeEmail = (e) => {
        setEmail(e);
    }
    const handleChangeAccountType = (e) => {
        setAccountType(e);
    }
    const handleClickEdit = (id) => {
        const input = document.getElementById(id);
        const inputBtn = document.getElementById(`${id}Btn`);
        if (id === editInput){
            handleClickUsername()
            input.disabled = true;
            inputBtn.innerText = 'Edit';
            setEditInput(false);
        } else {
            input.disabled = false;
            input.focus();
            inputBtn.innerText = 'Save';
            setEditInput(id);
        }
    }

    return (
        <SettingFormWrapper>
            <TitlePageH2>Setting</TitlePageH2>
            <LabelInput>Profile Picture</LabelInput>
            <HorizontalWrapper>
                <ProfilePicture>
                    {
                        personalData.profilePicture ?
                        <img src={personalData.profilePicture} alt='profile' /> :
                        <h2>{personalData.username[0].toUpperCase()}</h2>
                    }
                </ProfilePicture>
                <EditButton onClick={handleChangeShowSelectProfile}>Change Picture</EditButton>
            </HorizontalWrapper>
            <LabelInput>Username</LabelInput>
            <HorizontalWrapper>
                <InputSetting>
                    <input 
                        id="usenameInput" 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </InputSetting>
                <EditButton id="usenameInputBtn" onClick={() => handleClickEdit('usenameInput')}>Edit</EditButton>
            </HorizontalWrapper>
            <LabelInput>Email</LabelInput>
            <HorizontalWrapper>
                <InputSetting>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => handleChangeEmail(e.target.value)}
                    />
                </InputSetting>
                <EditButton onClick={() => handleChangeShowEmailVerification('email')}>Edit</EditButton>
            </HorizontalWrapper>
            <LabelInput>Password</LabelInput>
            <HorizontalWrapper>
                <InputSetting>
                    <input type="password" value={password} onChange={(e) => handleChangePassword(e.target.value)}/>
                </InputSetting>
                <EditButton onClick={() => handleChangeShowEmailVerification('password')}>Edit</EditButton>
            </HorizontalWrapper>
            <LabelInput>Account Type</LabelInput>
            <HorizontalWrapper>
                <InputSetting>
                    <input type="text" value={accountType} onChange={(e) => handleChangeAccountType(e.target.value)}/>
                </InputSetting>
                <EditButton>Edit</EditButton>
            </HorizontalWrapper>
            <ButtonWrapper>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </ButtonWrapper>
        </SettingFormWrapper>
    )
}