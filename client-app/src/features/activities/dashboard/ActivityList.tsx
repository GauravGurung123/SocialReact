import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../models/activity'

interface Props {
  activities: Activity[]
  selectActivity: (id: string) => void
  deleteActivity: (id: string) => void
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.descripiton}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated='right'
                  content='View'
                  onClick={() => selectActivity(activity.id)}
                  color='blue'
                />
                <Button
                  floated='right'
                  content='Delete'
                  onClick={() => deleteActivity(activity.id)}
                  color='red'
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  )
}
