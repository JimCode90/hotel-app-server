

export const showMessage = (req, res) => {
    res.status(200).send(`Tu mensaje es: ${req.params.message}`)
}

export const register = (req, res) => {
    console.log(req.body)
}
