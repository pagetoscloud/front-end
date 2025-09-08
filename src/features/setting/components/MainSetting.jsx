import { 
    MainSettingWrapper, 
} from "./MainSetting.styled";
import MainContentLayout from "../../../layouts/personal-area-layout/MainContentLayout";
import SettingForm from "./setting-form/SettingForm";

export default function MainSetting({personalData, showNavigation, handleChangeShowSelectProfile, handleChangeShowEmailVerification, profilePicture, handleLogout}){
    return (
        <>
            <MainContentLayout showNavigation={showNavigation}>
                <MainSettingWrapper>
                    <SettingForm 
                        personalData={personalData}
                        profilePicture={profilePicture}
                        handleChangeShowSelectProfile={handleChangeShowSelectProfile}
                        handleChangeShowEmailVerification={handleChangeShowEmailVerification}
                        handleLogout={handleLogout}
                    />
                </MainSettingWrapper>
            </MainContentLayout>
        </>
    )
}