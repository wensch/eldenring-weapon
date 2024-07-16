import {render, screen} from '@testing-library/react';
import { PostCard } from "."

const mock = {
  id: '0',
  name: 'Name',
  description: 'text',
  image: 'image.png'
}

describe('<PostCard />', () => { 
  
  it('should render PostCard', () => {
    render(<PostCard {...mock} />)

    expect(screen.getByRole('img', {name: mock.name})).toHaveAttribute('src', mock.image)
    expect(screen.getByRole('heading', {name: /name/i})).toBeInTheDocument()
  })  
  
  it('should match snapshot', () => {
    const  {container}  = render(<PostCard {...mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })

 })