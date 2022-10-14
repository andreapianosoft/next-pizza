import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";


const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                KDJGLJDKfsgdfgsdLDLFJL
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
          
            </div>
        </div>
    )
}

export default PizzaList;