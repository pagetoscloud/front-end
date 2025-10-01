import { EmailVerification, MainSetting, NewEmail, NewPassword, SelectProfilePicture } from "../features/setting";
import HorizontalLayout from "../layouts/HorizontalLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { PersonalAreaHeader, PersonalAreaNavigation } from "../components";
import { useState } from "react";
import profileIcon from '../assets/images/account.png';
import { useDispatch, useSelector } from "react-redux";
import {changeProfilePicture} from '../features/setting/accountDataSlice'
import { useNavigate } from "react-router-dom";
export default function Settings(){
    const personalData = useSelector(state => state.accountData.personalData);
    const [showNavigation, setShowNavigation] = useState(true);
    const [showSelectProfile, setShowSelectProfile] = useState(false);
    const [showEmailVerification, setShowEmailVerification] = useState(false);
    const [showNewEmail, setShowNewEmail] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [profilePicture, setProfilePicture] = useState(profileIcon);
    const [settingMode, setSettingMode] = useState(false);
    const dispatch = useDispatch();
    const handleChangePicture = async (value) => {
        const imageData = URL.createObjectURL(value);
        dispatch(changeProfilePicture(imageData));
        setProfilePicture(imageData);
        // let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/auth/change-profile-picture';
        // if (process.env.NODE_ENV === 'development'){
        //     url = 'http://localhost:5001/auth/change-profile-picture';
        // }

        const url = process.env.NODE_ENV !== 'development' 
            ? `${process.env.API_URL}/auth/change-profile-picture}` 
            : 'http://localhost:5001/auth/change-profile-picture';

        const formData = new FormData();
        formData.append('file', value);
        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                mode: 'cors',
                body: formData
            });
            const json = await response.json();
            // if (json.status === 'ok'){
            //     console.log('ok')
            // }
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate();
    const handleChangeShowSelectProfile = () => {
        if (showSelectProfile){
            setShowSelectProfile(false);
        } else {
            setShowSelectProfile(true);
        }
    }
    const handleChangeShowEmailVerification = (value) => {
        if (value){
            setSettingMode(value);
        }
        if (showEmailVerification){
            setShowEmailVerification(false);
        } else {
            setShowEmailVerification(true);
        }
    }
    const handleChangeShowNewEmailOrPassword = () => {
        if (settingMode === 'email'){
            if (showNewEmail){
                setShowNewEmail(false);
            } else {
                setShowNewEmail(true);
            }
        } else if (settingMode === 'password'){
            if (showNewPassword){
                setShowNewPassword(false);
            } else {
                setShowNewPassword(true);
            }
        }
    }
    const handleShowNavigation = () => {
        if (showNavigation){
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }
    const handleLogout = async () => {
        // let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/auth/logout';
        // if (process.env.NODE_ENV === 'development'){
        //     url = 'http://localhost:5001/auth/logout';
        // }
        const url = process.env.NODE_ENV !== 'development' 
            ? `${process.env.API_URL}/auth/logout}` 
            : 'http://localhost:5001/auth/logout';

        try {
            const response = await fetch(url, {
                method: "GET",
                mode: 'cors',
                credentials: 'include',
            });
            const json = await response.json();
            if (json.status === 'ok'){
                navigate('/login');
            }
            
        } catch (error) {
            throw error;
        }
    }
    return (
        <VerticalLayout>
                {
                    showNewEmail &&
                    <NewEmail />
                }
                {
                    showNewPassword &&
                    <NewPassword />
                }
                {
                    showEmailVerification &&
                    <EmailVerification 
                        handleChangeShowEmailVerification={handleChangeShowEmailVerification}
                        handleChangeShowNewEmailOrPassword={handleChangeShowNewEmailOrPassword}
                    />
                }
                {
                    showSelectProfile &&
                    <SelectProfilePicture
                        profilePicture={profilePicture}
                        personalData={personalData}
                        handleChangePicture={handleChangePicture}
                        handleChangeShowSelectProfile={handleChangeShowSelectProfile}
                    />
                }
                <PersonalAreaHeader 
                    handleShowNavigation={handleShowNavigation}
                    profilePicture={profilePicture}
                />
                <HorizontalLayout>
                    {
                        showNavigation &&
                        <PersonalAreaNavigation 
                            currentPage={'Setting'}
                        />
                    }
                    <MainSetting 
                        showNavigation={showNavigation}
                        handleChangeShowSelectProfile={handleChangeShowSelectProfile}
                        handleChangeShowEmailVerification={handleChangeShowEmailVerification}
                        profilePicture={profilePicture}
                        personalData={personalData}
                        handleLogout={handleLogout}
                    />
                </HorizontalLayout>
        </VerticalLayout>
    )
}