import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function renderComponent(Component: React.ReactNode) {
  return render(Component);
}

export async function clickButton(label: string) {
  const button = screen.getByText(label);
  await userEvent.click(button);
}

export function expectTextVisible(text: string) {
  expect(screen.getByText(text)).toBeInTheDocument();
}