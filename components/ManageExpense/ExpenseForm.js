import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../ui/Button";

function ExpenseForm({ onCancel, editing, onSubmit, previousValues }) {
  const [inputValues, setInputValues] = useState({
    amount: previousValues ? previousValues.amount.toString() : "",
    date: previousValues ? previousValues.date.toISOString().slice(0, 10) : "",
    description: previousValues ? previousValues.description : "",
  });

  function inputHandler(inputId, enteredValue) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputId]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
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
          value: inputValues.date,
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: inputHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {editing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    marginVertical: 10,
  },
});

export default ExpenseForm;
