function Animal(props) {
  const { animal, age, color, isHas } = props;
  const text =
    isHas === true ? (
      <div style={{ color: color }}>
        <h1>
          My {animal} {age} years old
        </h1>
      </div>
    ) : (
      <div style={{ color: color }}>
        <h2>Животных нет</h2>
      </div>
    );
  return text;
}

export default Animal;
