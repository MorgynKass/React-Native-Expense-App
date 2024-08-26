import { View } from "react-native";
import { useState } from "react";

import Input from "./Input";

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputHandler(inputId, enteredValue) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputId]: enteredValue,
      };
    });
  }

  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          placeholder: "$0.00",
          onChangeText: inputHandler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputHandler.bind(this, "date"),
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: inputHandler.bind(this, "description"),
        }}
      />
    </View>
  );
}

export default ExpenseForm;
