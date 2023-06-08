const cookieToken = (user, res) => {
    const token = user.getJwtToken()
    const options = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: true,
        signed: true,

    }
    user.password = undefined
    res.status(200).cookie('token', token, options)
        .json({
            success: true,
            token,
            user,
        })
}
export { cookieToken }

