import { createStore} from "redux"
import taskReducer from "./Reducers/taskReducer";

const store = createStore(taskReducer);
export default store;
