import type { Meta, StoryObj } from "@storybook/react";
import { StyledButton } from "../../components/StyledButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StyledButton> = {
  title: "StyledButton",
  component: StyledButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  render: () => <StyledButton variant="primary">Primary</StyledButton>,
};

export const Success: Story = {
    render: () => <StyledButton variant="success">Success</StyledButton>,
};

export const Transparent: Story = {
    render: () => <StyledButton variant="transparent">Transparent</StyledButton>,
};
