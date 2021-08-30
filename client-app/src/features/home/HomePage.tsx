import { Link } from 'react-router-dom'
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react'

export default function HomePage() {
  return (
    <Segment inverted vertical textAlign='center' className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: '12px' }}
          />
          SocialReactive
        </Header>
        <Header as='h2' inverted content='Welcome to SocialReactivities' />
        <Button as={Link} to='/activities' size='huge' inverted>
          Explore Social Activities
        </Button>
      </Container>
    </Segment>
  )
}
