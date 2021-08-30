import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

export default function ActivityFilters() {
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%', marginTop: '25px' }}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item content='All Activities' />
        <Menu.Item content='I am going' />
        <Menu.Item content='I am hosting' />
      </Menu>
      <Header />
      <Calendar />
    </>
  )
}
