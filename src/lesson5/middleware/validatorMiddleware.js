import store from "../Redux/store";
import { ADD } from "../Redux/actionTipe";
const validatorMiddleware = store=>next=>action=>{
    switch (action.type) {
        case ADD:
            if(action.payload.StartTime==""||action.payload.NameTask==""||action.payload.Deddline==""){
                alert("It is required to fill in all the details of the task");
                return;
            }
           

        default:
            next(action);
    }
    
}

export default validatorMiddleware;