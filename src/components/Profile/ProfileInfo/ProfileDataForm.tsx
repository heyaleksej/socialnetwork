import React, {FC} from "react";
import {ContactsType} from "./ProfileInfo";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../../common/FormControl/FormControl";
import s from './ProfileDataForm.module.css'
import CustomButton from "../../CustomButton/CustomButton";


export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

type PropsType = {
    profile: ProfileType
}


const ProfileData: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile, handleSubmit, error}) => {
    return <div className={s.box}>
        <h3> About me: </h3>
        <form onSubmit={handleSubmit} className={s.contact}>
            {error && <div className={s.error}>{error}</div>}

            <li>
                <div>fullName</div>: {createField('Full name', 'fullName', [], Input
            )}
            </li>
            <li>
                <div>aboutMe</div>: {createField('text about u', 'aboutMe', [], Input
            )}
            </li>

            <li>
                <div> Skills </div>: {createField('Расскажите о своем опыте', 'lookingForAJobDescription', [], Input)}
            </li>
            <li>
                <div>Looking for a job:</div>{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}
            )}
            </li>
            <div>
                <h3> Contacts </h3>{profile && Object.keys(profile.contacts).map((key) => {
                    return <div key={key}>
                        <li>{key}: {createField(key, 'contacts.' + key, [], Input)}</li>
                    </div>

                })}
            </div>
            <div className={s.btnSave}>
                <CustomButton name={'Save'}/>
            </div>
        </form>


    </div>
}

const ProfileDataFormWithRedux = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileData)

export default ProfileDataFormWithRedux

