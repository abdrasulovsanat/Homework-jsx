import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

const App = () => {
  const users = [
    {
      name: 'Mark',
      lastName: 'Harris',
      age: 21,
      id: 1
    },
    {
      name: 'Erling',
      lastName: 'Haaland',
      age: 22,
      id: 2
    },
    {
      name: 'Tomas',
      lastName: 'Lakin',
      age: 24,
      id: 3
    },
    {
      name: 'Eldred',
      lastName: 'Abernathy',
      age: 28,
      id: 4
    },
    {
      name: 'Paulo',
      lastName: 'Dybala',
      age: 27,
      id: 5
    },
    {
      name: 'Mohhamed',
      lastName: 'Salah',
      age: 28,
      id: 6
    },
    {
      name: 'Lionel',
      lastName: 'Messi',
      age: 35,
      id: 7
    },
    {
      name: 'Cristiano',
      lastName: 'Ronaldo',
      age: 38,
      id: 8
    },
    {
      name: 'Poul',
      lastName: 'Pogba',
      age: 28,
      id: 9
    }
  ]

  return (
    <>
      <Header />
      <Section users={users} />
      <Footer />
    </>
  )
}

export default App