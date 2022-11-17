const express = require("express")
const studentController = require("../controllers/student-controller")

const router = express.Router()

router.post("/addstudent", studentController.addStudent)
router.get("/getallstudent", studentController.getAllStudent)
router.get("/getstudent/:id", studentController.getStudent)
router.put("/updatestudent/:id", studentController.updateStudent)
router.delete("/deletestudent/:id", studentController.deleteStudent)
router.get("/query/:name", studentController.query)
module.exports = {
    router
}