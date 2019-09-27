
module.exports = {
    async register(req, res) {
        const db = req.app.get('db')
        const {username, password, profile_pic} = req.body

        const user = await db.find_user(username)

        if (user[0]) return res.status(200).send({message: 'Username already in use'})

        await db.add_user({username, password, profile_pic})

        res.session.user = {username, password, profile_pic}

        res.status(201).send({message: 'Logged in', user: req.session.user, loggedIn: true})
    },
    async login(req, res) {
        const db = req.app.get('db')
        const {username, password} = req.body

        const user = await db.find_user(username)

        if (!user[0]) return res.status(200).send({message: 'Username not found'})

        const {username, password, profile_pic} = user[0]
        req.session.user = {username, password, profile_pic} 

        res.status(200).send({message: 'Loggin in', user: req.session.user, loggedIn: true})
    }
}