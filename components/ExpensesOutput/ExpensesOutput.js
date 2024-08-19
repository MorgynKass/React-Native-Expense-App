import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expenseInterval }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} intervalName={expenseInterval} />
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
