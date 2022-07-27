import styles from './Forms.css';
import '../Layout/reset.css';
import '../Layout/global.css';

export default function Forms() {
  return (
    <div className={styles.Forms}>
      <form name={'formExample'}>
        <input
          type={'number'}
          defaultValue={'number input example'}
          name={'textInput'}>
                
        </input>
        <textarea defaultValue={'text area input'}></textarea>
        <select name="selectForm">
          <option value={1}>first option</option>
          <option value={2}>second option</option>
          <option value={3}>third option</option>
        </select>
        <input type={'checkbox'} />
      </form>

    </div>
  );
}
