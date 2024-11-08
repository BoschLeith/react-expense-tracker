import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenses")({
  component: About,
});

function About() {
  return <div className="p-2">Show All Expenses</div>;
}
