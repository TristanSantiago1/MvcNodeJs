const errorhandler = (err, req, res, next) => {
    console.log("Manejo de errores desde el middleware");
    const defaultMesage = "la aplicacion esta ocupada, intentelo mas tarde"

    if(process.env.NODE_ENV === 'development'){
        const statusCode = err.statusCode || 500
        const message = err.message || defaultMesage
        res.status(statusCode).json({
            success: false,
            status: statusCode,
            message: message,
            stack: err.stack
        })
    }
    else{
        res.status(200).send(defaultMesage)
    }
}

module.exports = errorhandler
