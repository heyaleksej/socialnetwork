import React from "react";

export const RequiredField = (value: any) => {
    return !value ? 'Field is required': undefined

}

export const MaxLength = (MaxLength: number) => (value: any) => {
    if (value && value.length > MaxLength) return `Max Length is ${MaxLength}`
    return undefined

}