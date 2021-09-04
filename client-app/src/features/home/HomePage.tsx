import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import LoginForm from '../users/LoginForm'
import RegisterForm from '../users/RegisterForm'

export default observer(function HomePage() {
  const { userStore, modalStore } = useStore()

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
        {userStore.isLoggedIn ? (
          <>
            <Header as='h2' inverted content='Welcome to SocialReactivities' />
            <Button as={Link} to='/activities' size='huge' inverted>
              Go to activities!
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => modalStore.openModal(<LoginForm />)}
              size='huge'
              inverted
            >
              Login!
            </Button>
            <Button
              onClick={() => modalStore.openModal(<RegisterForm />)}
              size='huge'
              inverted
            >
              Register!
            </Button>
          </>
        )}
      </Container>
    </Segment>
  )
})
