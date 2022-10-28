import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@joaoguibc-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/joaoguibc.png',
    alt: 'João Guilherme Da Rocha',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
