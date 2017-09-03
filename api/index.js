import express from 'express'
import data from '../src/testData.json'
import { MongoClient } from 'mongodb'
import assert from 'assert'
import config from '../config'

let mdb
MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err)
    console.log('Connected to MongoDB')

    mdb = db
})

const router = express.Router()
const contests = data.contests.reduce((contests, contest) => {
    contests[contest.id] = contest
    return contests
}, {})

router.get('/contests', (req, res) => {
    let contests = {}
    mdb.collection('contests').find({})
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1
        })
        .each((err, contest) => {
            assert.equal(null, err)

            if (!contest) {
                res.send({contests})
                return
            }

            contests[contest.id] = contest
        })
})

router.get('/contests/:contestId', (req, res) => {
    mdb.collection('contests').findOne({id: Number(req.params.contestId)})
        .then(contest => res.send(contest))
        .catch(console.err)
})

export default router