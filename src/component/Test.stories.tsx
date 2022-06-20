import { Test } from './Test'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Test',
  component: Test,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'BTN',
}
