import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@joaoguibc-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum optio debitis autem labore numquam esse molestiae aliquid, repudiandae accusantium omnis nisi, voluptatibus aliquam modi illum! Quisquam blanditiis aliquam dolore!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
