import styles from './FormControls.css';
import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from './FormControls.jsx';
import '../Layout/reset.css';
import '../Layout/global.css';

export default function Forms() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <div className = {styles.formControl}>
      This page is an example of various forms
      <form className={styles.Form}
        onSubmit={handleSubmit}
        name={'formExample'}>
        <Fieldset legend="example of a set of fields">
          <InputControl
            type={'number'}
            defaultValue={0}
            label={'user ID'} />
          <InputControl
            type={'text'}
            defaultValue={'Text InputControl example'}
            label={'username'} />
        </Fieldset>
        <TextAreaControl
          className={styles.PasswordControl}
          label={'password'}
          defaultValue={'TextArea input'} />
        <SelectControl label={'city of branch'} name="selectForm">
          <option value={1}>first option</option>
          <option value={2}>second option</option>
          <option value={3}>third option</option>
        </SelectControl>
        <CheckboxControl label={'receive logs?'} text={'example checkbox'}/>
        <FormButton>Submit Form</FormButton>
      </form>

    </div>
  );
}
