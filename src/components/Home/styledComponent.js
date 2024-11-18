import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  background-color: #eef4f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`

export const Heading = styled.h1`
  color: #334155;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
`

export const Container = styled.ul`
  width: min(90%, 1000px);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0px;
`

export const Card = styled.li`
  width: 90%;
  background-color: #fff;
  list-style: none;
  img {
    width: 100%;
  }
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`
export const Description = styled.div`
  width: 100%;
  padding: 15px;
  h3 {
    color: #475569;
  }
  p {
    color: #64748b;
  }
`
export const LoaderSpinner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
