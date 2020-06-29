// Enter here the user flows and custom policies for your B2C application
// To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
// To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview

const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_susi",
        forgotPassword: "b2c_1_reset"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://login.mytapio.one/tapiousers.onmicrosoft.com/b2c_1a_tapio_signin",
        },
        forgotPassword: {
            authority: "https://login.mytapio.one/tapiousers.onmicrosoft.com/b2c_1a_tapio_ResetPW",
        },
    },
}