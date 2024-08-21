import { Text } from "react-native";
import { useEffect } from "react";

function ManageExpenses({ route, navigation }) {
  const id = route.params?.expenseId;
  const isEditing = !!id;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  return;
  <Text>ManageExpenses</Text>;
}

export default ManageExpenses;
