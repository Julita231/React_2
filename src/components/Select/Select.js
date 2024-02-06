function Select() {
  return (
    <div>
      <label htmlFor="currency">Wybierz walutę:</label>
      <select name="currency" id="currency">
        <option value="EUR">Euro</option>
        <option value="USD">Dolary amerykańskie</option>
        <option value="CHF">Franki szwajcarskie</option>
      </select>
    </div>
  );
}

export default Select;
