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

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId]
    contest.description= 'lorem impsum'

    res.send(contest)
})

export default router