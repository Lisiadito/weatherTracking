import express from 'express'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import dayjs from 'dayjs'
import { connect_promise } from './orm'
import User from './orm/entity/User'
import WeatherData from './orm/entity/WeatherData'

const app: express.Application = express()

app.use(bodyParser.json())

app.listen(3000, async () => {
    await connect_promise
    console.log('App runs on port 3000')
})

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.post('/weather/add', async (req, res) => {
    const username: string = req.body.username
    const password: string = req.body.password

    const date = dayjs(req.body.date)
    const maxTemp: number = req.body.maxTemp
    const minTemp: number = req.body.minTemp
    const rainfall: number = req.body.rainfall

    if (!username || !password) {
        return res.status(400).send('Please specify username and password')
    }

    if ( maxTemp === undefined || minTemp === undefined || rainfall === undefined || date === undefined) {
        return res.status(400).send('Please specify date, maxTemp, minTemp and rainfall')
    }

    try {
        const user = await User.findOne<User>({
            where: {
                username
            }
        })

        if (user && user.enabled) {
            const isCorrectPassword = await bcrypt.compare(password, user.password)

            if (isCorrectPassword) {
                const weather = new WeatherData()
                weather.date = date.toDate()
                weather.maxTemp = maxTemp
                weather.minTemp = minTemp
                weather.rainfall = rainfall

                await weather.save()

                return res.sendStatus(200)
            } else {
                return res.sendStatus(403)
            }
        } else {
            return res.sendStatus(403)
        }
    } catch (e) {
        console.error(e)
        return res.sendStatus(500)
    }

})

app.post('/user/add', async (req, res) => {
    const username: string = req.body.username
    const password: string = req.body.password

    if (username && password) {
        try {
            const user = new User()
            user.username = username
            user.password = await bcrypt.hash(password, 10)
            user.enabled = false
            user.admin = false

            await user.save()

            return res.sendStatus(200)
        } catch (e) {
            console.error(e)
            return res.status(500)
        }

    } else {
        return res.status(400).send('Please specify username and password')
    }
})