import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {
  MainContainer,
  Container,
  Heading,
  Card,
  Description,
  LoaderSpinner,
} from './styledComponent'

const status = {
  initial: 'initial',
  fetched: 'Fetched',
  notFetched: 'NotFetched',
}

const Home = () => {
  const [travelList, updateTravelList] = useState([])
  const [dataStatus, updateDataStatus] = useState(status.initial)

  const getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      updateTravelList(data.packages)
      updateDataStatus(status.fetched)
    } else {
      updateDataStatus(status.notFetched)
    }
  }

  useEffect(() => {
    getData()
  })

  const loader = (
    <LoaderSpinner data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderSpinner>
  )

  return (
    <MainContainer>
      <Heading>Travel Guide</Heading>
      {dataStatus !== status.fetched ? (
        loader
      ) : (
        <Container>
          {travelList.map(each => (
            <Card key={each.id}>
              <img src={each.image_url} alt={each.name} />
              <Description>
                <h3>{each.name}</h3>
                <p>{each.description}</p>
              </Description>
            </Card>
          ))}
        </Container>
      )}
    </MainContainer>
  )
}

export default Home
