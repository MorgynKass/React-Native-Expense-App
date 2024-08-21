import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgoDate = getDateMinusDays(today, 7);

    return expense.date > sevenDaysAgoDate;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expenseInterval="Last 7 Days" />
  );
}

export default RecentExpenses;
