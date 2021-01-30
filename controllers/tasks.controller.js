
// @@api: http://localhost:3000/tasks/
const tasks = (req, res) => {
    res.status(200).json({
        message: "in tasks"
    })
}

// @@api: http://localhost:3000/tasks/add
const add = (req, res) => {
    const taskAdded = taskData.addTask()
    res.status(200).json(
        taskAdded
    )
}

// @@api: http://localhost:3000/tasks/list
const list = (req, res) => {
    res.status(200).json({
        list: taskData.tasks
    })
}

// @@api: http://localhost:3000/tasks/markComplete
const markComplete = (req, res) => {
    const index = userFn.randomNumber(0,taskData.tasks.length - 1)
    taskData.tasks[index].completed = true
    res.status(200).json({
        message: taskData.tasks[index]
    })
}

// @@api: http://localhost:3000/tasks/update
const update = (req, res) => {
    const updatedData = taskData.tasksRandomObj()
    const num = userFn.randomNumber(0, taskData.tasks.length-1)
    let y = {
        ...updatedData,
        id: taskData.tasks[num].id,
        userId: taskData.tasks[num].userId
    }
    taskData.tasks[num] = y
    let obj = {
        num,
        "updated data": y 
    }
    res.status(200).json(obj)
}

// @@api: http://localhost:3000/tasks/describe
const describe = (req, res) => {
    const num = userFn.randomNumber(0, taskData.tasks.length-1)
    let y = taskData.returnUserDetails(num)
    let z = {
        ...taskData.tasks[num],
        users : y
    }
    res.status(200).json(
        z
    )
}

// @@api: http://localhost:3000/tasks/delete
const destroy = (req, res) => {
    const num = userFn.randomNumber(0, taskData.tasks.length-1)

    res.status(200).json({
        message: taskData.tasks[num]
    })

    taskData.tasks.splice(num,1)
}

// @@api: http://localhost:3000/tasks/listOnlyRemaining
const listOnlyRemaining = (req, res) => {
    const result = taskData.tasks.filter(obj => {
        return obj.completed === false
    })
    res.status(200).json(
        result
    )
}

module.exports = {
    tasks,
    add,
    list,
    markComplete,
    update,
    describe,
    destroy,
    listOnlyRemaining
}