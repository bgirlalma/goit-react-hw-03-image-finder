import { Dna } from 'react-loader-spinner';
import {Container, ButtonLoadMore} from './loadMore.styled';

export const LoadMore = ({loadMoreImages, loaderVisible}) => {
    return (
        <Container>
     {loaderVisible ? (
        <Dna
          visible={true}
          height="40"
          width="40"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <ButtonLoadMore onClick={loadMoreImages}>Load More</ButtonLoadMore>
      )}
        </Container>
    )
}