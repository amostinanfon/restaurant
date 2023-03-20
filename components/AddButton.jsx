import styles from '../styles/AddButton.module.css';




// const AddButton = ({setClose}) => {

    const AddButton = () => {

    return (
    <div 
        className={styles.mainAddButton}
        // onClick={() => setClose(true)}
    >
            Ajouter une nouvelle pizza
    </div>)
}



export default AddButton;