import { useBudgets } from "../contexts/BudgetsContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);

  //don't show the uncategorized card if there are no uncategorized expenses
  if (max === 0) return null;

  return <BudgetCard gray name="Total" amount={amount} max={max} hideButtons />;
}
