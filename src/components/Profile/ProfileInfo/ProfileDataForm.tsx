import React, {FC} from "react";
import {ContactsType, ProfileDataPropsType} from "./ProfileInfo";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormControl/FormControl";
import s from './ProfileDataForm.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

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
    return <form onSubmit={handleSubmit} className={s.box}>
        <button>save</button>
        {error && <div className={s.error}>{error}</div>}

        <div>
            <b>fullName</b>: {createField('Full name', 'fullName', [], Input
        )}
        </div>
        <div>
            <b>aboutMe</b>: {createField('что нибудь', 'aboutMe', [], Input
        )}
        </div>
        <div>
            <b>Looking for a job</b>:{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}
        )}
        </div>
        <div>
            <b> Skills </b>: {createField('Расскажите о своем опыте', 'lookingForAJobDescription', [], Input)}
        </div>
        <div>
            <div className={s.contactsBox}><b> Contacts </b>: {profile && Object.keys(profile.contacts).map((key) => {
                return <div key={key}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>

            })}
            </div>
        </div>
    </form>
}

const ProfileDataFormWithRedux = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileData)

export default ProfileDataFormWithRedux

