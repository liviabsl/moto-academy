class ValidatorMiddleware {
    validateInput(request, response, next) {
        const {nome, idade} = request.body;
        if (typeof(nome) !== 'string' || typeof(idade) !== "number") {
            return response.status(500).json({description: `Payload contem tipos errados: Parametro errado : ${typeof(nome) !== 'string ? "nome" : "Idade'}`})
        }
        console.log(request.body)
    }
}
module.exports = new ValidatorMiddleware()