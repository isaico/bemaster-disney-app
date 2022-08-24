export const authErrors = (errorCode, string, handleInputError, message) => {
    if (errorCode === string) {
        handleInputError(message);
    }
};
