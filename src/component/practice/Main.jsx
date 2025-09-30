import { Provider } from "react-redux"
import {store} from "./Store"
import { List } from "./List"
import {Quiz } from "./Quiz"
export function Main(){
 return(
    <Provider store={store}>
        {/* <List/> */}
        <Quiz/>
    </Provider>
 )
}