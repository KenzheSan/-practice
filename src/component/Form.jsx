import { useState } from "react";

function Form(props) {
  const { inputType, x } = props;
  const [inputText, setInputText] = useState("");
  console.log(inputText);
  const getInputText = (e) => {
    setInputText(e.target.value);
  };
  const buttonClick = (e) => {
    e.preventDefault();
    x(inputText);
  };
  return (
    <div>
      <form>
        <input onChange={getInputText} value={inputText} type={inputType} />
        <button onClick={buttonClick} type="submit">
          Click Me
        </button>
      </form>
    </div>
  );
}
export default Form;
