import Header from '../Header'
import TopicContext from '../../Context/TopicContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => (
  <TopicContext.Consumer>
    {value => {
      const {
        isWelcomeStatus,
        isChangeWelcomeStatus,
        nameInput,
        topicInput,
      } = value
      const topicName = topicsList.filter(
        eachTopic => eachTopic.id === topicInput,
      )
      console.log(topicName)
      const onRegister = () => {
        const {history} = props
        isChangeWelcomeStatus()
        history.replace('/register')
      }
      const renderWelcomePage = () => (
        <div>
          <h1>Welcome to meet up</h1>
          <p>Please register for the topic</p>
          <button type="button" onClick={onRegister}>
            Register
          </button>
        </div>
      )

      const renderHelloUserPage = () => (
        <div>
          <h1>Hello {nameInput}</h1>
          <p>Welcome to {topicName[0].displayText}</p>
        </div>
      )
      return (
        <div>
          <Header />
          {isWelcomeStatus ? renderHelloUserPage() : renderWelcomePage()}
        </div>
      )
    }}
  </TopicContext.Consumer>
)
export default Home
