

export const showMessage = (req, res) => {
    res.status(200).send(`Tu mensaje es: ${req.params.message}`)
}

