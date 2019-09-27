// const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res) {
        const db = req.app.get('db')
        const {username, password, profile_pic} = req.body
        const user = await db.find_user(username)
        if (user[0]) return res.status(200).send({message: 'Username already in use'})


        // const salt = bcrypt.genSaltSync(10)
        // const hash = bcrypt.hashSync(password, salt)

        const usernameId = await db.add_user({username, password, profile_pic})

        db.add_user({user_id: usernameId.user_id}).catch(err => {
            return res.sendStatus(503)
        })
        
        req.session.user = {username, password, profile_pic}
        res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
    },
    async login(req, res) {
        const db = req.app.get('db')
        const {username, password, profile_pic} = req.body

        const user = await db.find_user(username)

        if (!user[0]) return res.status(200).send({message: 'Username not found'}) 
        

        // const result = bcrypt.compareSync(password, user[0].hash)
        // if (!result) return res.status(200).send({message: "Incorrect password"})

        // const {profile_pic} = user[0]
        req.session.user = {username, password, profile_pic} 

        if(user[0]) return res.status(200).send({message: 'Loggin in', user: req.session.user, loggedIn: true})
    },
    async logout(req, res) {
        req.session.destory()
        res.status(200).send({message: 'Logged out', loggedIn: false, user: null})
    }
}