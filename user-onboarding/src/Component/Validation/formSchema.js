import * yup from 'yup'

const formSchema = yup.object().shape({
    name:yup    
        .string()
        .trim()
        .required('Username Required')
        .min(3, "username must be 3 characters long"),
        email:yup
        .string()
        .email("Insert Valid Email")
        .required('Email required'),
        password: yup
        .string()
        .required("Password Required")
        .min(10, "Password must be 10 digits long and include a special character"),
        ToS: yup
        .boolean()
        .oneOf([true], "You must accept terms and conditions before you may continue")
})

export default formSchema;