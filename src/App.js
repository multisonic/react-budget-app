import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          {/* me-auto keeps h1 fixed to the left by adding space onto the end of the element */}
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>

        {/* custom css grid below */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <BudgetCard name="Entertainment" amount={200} max={1000} gray />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
    </>
  );
}

export default App;
