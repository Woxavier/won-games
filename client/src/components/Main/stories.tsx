import Main from '.'

export default {
  title: 'Main',
  component: Main
}

export const Basic = (args) => <Main {...args} />
Basic.args = {
  title: 'Salve familia na situação das coisas',
  description: 'Aí dentro'
}

export const Default = (args) => <Main {...args} />
Default.args = {
  title: 'É só um teste boy',
  description: 'É sim'
}
