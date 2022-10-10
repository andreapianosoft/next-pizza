import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";


const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                KDJGLJDKfsgdfgsdLDLFJL
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList;