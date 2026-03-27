const User = require("../models/User")

const register = async (req,res) => {
    try {
        const { username, email, password } = req.body

        const newUser = new User ({
            username,
            email,
            password
        })

        await newUser.save()

        res.status(201).json(newUser)
    }   catch (error) {
        console.error(error)
        res.status(500).json({error:"Error al registrar"})
    }
}


const login = async (req,res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({
            $or: [
            { email },
            { username: email }
        ]
    })

        if (!user) {
            return res.status(404).json({error:"usuario no encontrado"})
        }

        if (user.password !== password) {
            return res.status(401).json({error:"Contraseña incorrecta"})
        }
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Error al logarse"})
    }
}

module.exports = {
    register,
    login
}