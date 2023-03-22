import styles from '../styles/AddButton.module.css';




const AddButton = ({setClose}) => {

    return (
    <div 
        className={styles.mainAddButton}
        onClick={() => setClose(false)}
    >
            Ajouter une nouvelle pizza
    </div>)
}



export default AddButton;