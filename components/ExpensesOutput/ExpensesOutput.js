import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expenseInterval }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} intervalName={expenseInterval} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.lightBeige,
  },
});

export default ExpensesOutput;
