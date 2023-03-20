import styles from '../styles/Add.module.css';




const AddButton = ({setClose}) => {
    return (
    <div 
        className={styles.mainAddButton}
        onClick={() => setClose(true)}
    >
            Ajouter une nouvelle pizza
    </div>)
}



export default AddButton;