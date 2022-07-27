import styles from './FormControls.css';
import classNames from 'classnames'; //not sure what this does honestly

//so do reply to my assignment if i'm misunderstanding all this.
//this file is a little confusing to me

//FormControl makes a new html object with the given class name, a bit of text
//beforehand that says [label], and the rest of the stuff below it
//basically the thing that everything else calls to make the actual object
function FormControl({
  label,
  children,
  className: customClassName,
}) {
  const className = classNames(
    styles.FormControl,
    customClassName
  );

  return (
    <label className={className}>
      <Label text={label} />
      {children}
    </label>
  );
}

//just a span that makes some text appear
function Label({ text }) {
  return <span className="label-text">{text}</span>;
}

//each of these four functions make a FormControl on the page
//so when you call these components, they have to have at least
//a label and... some text (a "placeholder" or "value")?
//and then other arguments as optional parameters
export function CheckboxControl({ label, text, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <Label text={label} />
      <label className={styles.CheckboxLabel}>
        <input type="checkbox" {...rest} />
        {text}
      </label>
    </div>
  );
}

export function InputControl({
  label,
  className,
  ...rest
}) {
  return (
    <FormControl label={label} className={className}>
      <input {...rest} />
    </FormControl>
  );
}

export function SelectControl({
  label,
  children,
  ...rest
}) {
  return (
    <FormControl label={label}>
      <select {...rest}>{children}</select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

//just a button with the right class
export function FormButton({ children }) {
  return (
    <button className={styles.FormButton}>
      {children}
    </button>
  );
}

//like a regular fieldset, but the legend is an argument
//instead of its own html element(it converts it into one)
export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
