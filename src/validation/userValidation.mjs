export const userValidationSchema = {
    email: {
        isEmail: true,
    },
    password: {
        isLength: {
            options: { min: 8 },
            errorMessage: 'Password should be at least 8 chars',
        },
    },
}