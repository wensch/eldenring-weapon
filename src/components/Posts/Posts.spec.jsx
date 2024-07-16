import { Posts } from '.';

const { render, screen } = require("@testing-library/react")

const props = {
  posts: [
    {
      id: '0',
      name: 'Name',
      description: 'text',
      image: 'image.png'
    },
    {
      id: '1',
      name: 'Name1',
      description: 'text1',
      image: 'image.png1'
    },
    {
      id: '2',
      name: 'Name2',
      description: 'text2',
      image: 'image.png2'
    }
  ]

}
describe('<Posts />', () => { 

  it('should render posts', () => {
    render(<Posts {...props} />)

    expect(screen.getAllByRole('heading', {name: /name/i})).toHaveLength(3)
    expect(screen.getAllByRole('img', {image: /png/i})).toHaveLength(3)
    expect(screen.getAllByText(/text/i)).toHaveLength(3)

  })
  
  it('should match snapshot', () => {
    const {container} = render(<Posts {...props} />)

    
    expect(container.firstChild).toMatchSnapshot()

  })
  
})