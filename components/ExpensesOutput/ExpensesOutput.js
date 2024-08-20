import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Apple watch",
    amount: 399.99,
    date: new Date("2022-1-28"),
  },
  {
    id: "e3",
    description: "Shirt",
    amount: 12.67,
    date: new Date("2022-2-4"),
  },
  {
    id: "e4",
    description: "A pair of jeans",
    amount: 24.99,
    date: new Date("2022-2-16"),
  },
  {
    id: "e5",
    description: "Sunglasses",
    amount: 59.99,
    date: new Date("2022-2-21"),
  },
];

function ExpensesOutput({ expenses, expenseInterval }) {
  return (
    <View>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        intervalName={expenseInterval}
      />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExpensesOutput;
