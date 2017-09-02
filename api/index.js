import express from 'express'
import data from '../src/testData.json'

const router = express.Router()
const contests = data.contests.reduce((contests, contest) => {
    contests[contest.id] = contest
    return contests
}, {})

router.get('/contests', (req, res) => {
    res.send({ contests })
})

export default router