import React from 'react'

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
const TopicContext = React.createContext({
  isWelcomeStatus: false,
  nameInput: '',
  topicInput: topicsList[0].id,
  isError: false,
  isChangeName: () => {},
  isChangeTopic: () => {},
  isChangeWelcomeStatus: () => {},
  isChangeErrorStatus: () => {},
})
export default TopicContext
