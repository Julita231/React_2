function Input() {
  return (
    <div>
      <label htmlFor="amount">Kwota:</label>
      <input name="amount" type="number" id="amount" min="0.01" step="0.01" />
    </div>
  );
}

export default Input;
