import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";
import BudgetCard from "./BudgetCard";

export default function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  //don't show the uncategorized card if there are no uncategorized expenses
  if (amount === 0) return null;

  return <BudgetCard gray name="Uncategorized" amount={amount} {...props} />;
}
