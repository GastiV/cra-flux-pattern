import {StoreContext} from './State/Store';
import {useContext} from "react";

const Fruits = () => {
    const {state} = useContext(StoreContext);
    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                {state.fruits.map(fruit => <li>{fruit}</li>)}
            </ul>
        </div>

    )
}
export default Fruits;