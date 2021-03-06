import { Gamepage } from './Gamepage.js';
import { screen, render, waitFor, getAllByTestId } from '@testing-library/react';

describe('Gamepage', () => {

  describe('isGenDisplay method', () => {
    it('1. should render the `word-input` if `isGenerator is not true`', () => {

      render(
      <Gamepage
      debug={true}
      display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
      attempts={['one', 'two', 'three']}
      isGenerator={null}
      playerNames={[]}
      chat={[]}
      makeGuess={
        async (newGuess) => {
          // const guess = await apiCalls.makeGuess(newGuess)
          // this.setState({guess})
          console.log('newGuess', newGuess)
        }
      }
      />);

      expect(screen.getByPlaceholderText('Letter or Word')).toBeInTheDocument();
    })
    it('2. should render the `Guess` button if `isGenerator is not true`', () => {

      render(
      <Gamepage
      debug={true}
      display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
      attempts={['one', 'two', 'three']}
      isGenerator={null}
      playerNames={[]}
      chat={[]}
      makeGuess={
        async (newGuess) => {
          // const guess = await apiCalls.makeGuess(newGuess)
          // this.setState({guess})
          console.log('newGuess', newGuess)
        }
      }
      />);
      expect(screen.getByTestId('word-submit-button')).toBeInTheDocument();
    })

  // expect(screen.getByText('Attempts')).toBeInTheDocument();
  })

  describe('Render method / Headers', () => {
    it('3. should render the `Chat` header', () => {

      render(
      <Gamepage
      debug={true}
      display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
      attempts={['one', 'two', 'three']}
      isGenerator={null}
      playerNames={[]}
      chat={[]}
      makeGuess={
        async (newGuess) => {
          // const guess = await apiCalls.makeGuess(newGuess)
          // this.setState({guess})
          console.log('newGuess', newGuess)
        }
      }
      />);
      expect(screen.getByPlaceholderText('Chat')).toBeInTheDocument();
    })
    // it('4. should render the `Draw Board` header', () => {

    //   render(
    //   <Gamepage
    //   display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
    //   attempts={['one', 'two', 'three']}
    //   isGenerator={null}
    //   playerNames={[]}
    //   chat={[]}
    //   makeGuess={
    //     async (newGuess) => {
    //       // const guess = await apiCalls.makeGuess(newGuess)
    //       // this.setState({guess})
    //       console.log('newGuess', newGuess)
    //     }
    //   }
    //   />);
    //   expect(screen.getByText('Draw Board')).toBeInTheDocument();
    // })
    it('5. should render the `Attempts` header', () => {

      render(
      <Gamepage
      debug={true}
      display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
      attempts={['one', 'two', 'three']}
      isGenerator={null}
      playerNames={[]}
      chat={[]}
      makeGuess={
        async (newGuess) => {
          // const guess = await apiCalls.makeGuess(newGuess)
          // this.setState({guess})
          console.log('newGuess', newGuess)
        }
      }
      />);
      expect(screen.getByText('Attempts')).toBeInTheDocument();
    })
  })

  describe('splitDisplay()', () => {
    it('6. should render the `display` prop', () => {

      render(
      <Gamepage
      debug={true}
      display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
      attempts={['one', 'two', 'three']}
      isGenerator={null}
      playerNames={[]}
      chat={[]}
      makeGuess={
        async (newGuess) => {
          // const guess = await apiCalls.makeGuess(newGuess)
          // this.setState({guess})
          console.log('newGuess', newGuess)
        }
      }
      />);
      for (let id = 0; id < 8; id++) {
        expect(screen.getByTestId(`${id}`)).toBeInTheDocument();
      }
    })
  })

  describe('mapAttempts()', () => {
    it('6. should display each attempt', () => {

      render(
      <Gamepage
        debug={true}
        display={['d', '_', '_', 'o', '_', 'a', 'u', 'r']}
        attempts={['one', 'two', 'three']}
        isGenerator={null}
        playerNames={[]}
        chat={[]}
        makeGuess={
          async (newGuess) => {
          const guess = await apiCalls.makeGuess(newGuess)
          this.setState({guess})
          console.log('newGuess', newGuess)
          }
        }
      />);
      expect(screen.getByText('one')).toBeInTheDocument();
      expect(screen.getByText('two')).toBeInTheDocument();
      expect(screen.getByText('three')).toBeInTheDocument();
    })
  })
})
