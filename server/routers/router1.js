const { Router } = require("express")

const { bookHandler, getSeatsHandler, resetHandler } = require("../handlers")
const { tickets } = require("../js/db")


const router = Router()

// router.use(function (req, res, next) { setTimeout(next, 10000) })
router.get("/book", bookHandler)
router.get("/seats", getSeatsHandler)
router.get("/ticketReset", resetHandler)

module.exports = router
