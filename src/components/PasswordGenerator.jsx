import { useState } from "react";
import Checkbox from "./Checkbox";
import { FaCopy } from "react-icons/fa";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let characterList = "";

    if (includeLowercase) {
      characterList += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
      characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      characterList += "0123456789";
    }
    if (includeSymbols) {
      characterList += "!@#$%^&*()_+=-`~[]{}|;':\",./<>?";
    }

    let newPassword = "";
    const characterListLength = characterList.length;

    if (characterListLength === 0) {
      alert("Veuillez sélectionner au moins un type de caractère.");
      return;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterListLength);
      newPassword += characterList.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="generator">
      <h2>Générateur de Mot de Passe</h2>
      <div className="password-div">
        <h3>Mot de passe :</h3>
        <div>
          <input type="text" value={password} readOnly />
          <FaCopy
            onClick={handleCopy}
            className="icon"
            style={{ marginLeft: "10px", fontSize: "20px" }}
          />
          {copied && <span>Copié</span>}
        </div>
      </div>

      <div className="length">
        <label htmlFor="length">Longueur:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(Math.max(8, parseInt(e.target.value)))}
          min="8"
        />
      </div>
      <Checkbox
        label="Inclure les majuscules:"
        checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}
      />
      <Checkbox
        label="Inclure les minuscules:"
        checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)}
      />
      <Checkbox
        label="Inclure les nombres:"
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      />
      <Checkbox
        label="Inclure les symboles:"
        checked={includeSymbols}
        onChange={(e) => setIncludeSymbols(e.target.checked)}
      />
      <button onClick={generatePassword}>Générer</button>
    </div>
  );
};

export default PasswordGenerator;
