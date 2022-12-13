// import { Component } from 'react';
// import { Item, Image } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  // state = {
  //   image: null,
  //   error: null,
  //   status: Status.IDLE,
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.imageName;
  //   const nextName = this.props.imageName;

  //   if (prevName !== nextName) {
  //     this.setState({ status: Status.PENDING });

  //     return fetch(
  //       `https://pixabay.com/api/?q=cat&page=1&key=23552820-93d67742e09e03fef5d4385d1&q=${nextName}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }

  //         return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
  //       })
  //       .fetchPokemon(nextName)
  //       .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
  //       .catch(error => this.setState({ error, status: Status.REJECTED }));
  //   }
  // }

  render() {
    return (
      <Item>
        <Image src="" alt="" />
      </Item>
    );
  }
}
