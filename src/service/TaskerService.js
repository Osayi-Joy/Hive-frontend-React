import axios from "axios";

const GET_ALL_NEW_TASKS_CREATED = "http://localhost:8080/tasks/tasker/?status=NEW";
const GET_ONGOING_TASKS = "http://localhost:8080/tasks/tasker/?status=ONGOING";
const GET_COMPLETED_TASKS = "http://localhost:8080/tasks/tasker/?status=COMPLETED";
const GET_ALL_TASKS = "http://localhost:8080/transaction/history";

class TaskerService {
    getAllNewTasksCreated(data, token) {
        return axios.get(GET_ALL_NEW_TASKS_CREATED, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });
    }

    getAllOngoingTasksCreated(data, token) {
        return axios.get(GET_ONGOING_TASKS, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });
    }

    getAllCompletedTasksCreated(data, token) {
        return axios.get(GET_COMPLETED_TASKS, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });
    }
    approveTask(token, taskId) {
        return axios.post(`http://localhost:8080/tasks/${taskId}/approve`, "", {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
            }
        });
    }


}

export default new TaskerService();