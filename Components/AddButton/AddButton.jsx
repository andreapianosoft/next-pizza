import styles from './Add.module.css';

const AddButton = ({ setClose }) => {
    return (
        <div onClick={() => setClose(false)} className={styles.mainAddButton}>
            Add New Pizza
        </div>
    );
};

export default AddButton;
