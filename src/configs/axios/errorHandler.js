import { toast } from 'react-toastify';


const errorHandler = (error) => {
    if (error) {
        let message;
        if (error.response) {
            if (error.response.status === 500) message = "Username or password did not match"
            else message = error.response.data.message
            if (typeof message === "string") toast.error(message)

            return Promise.reject(error)
        }
    }
}
export default errorHandler;
