import { Dna } from 'react-loader-spinner';


export const LoadMore = ({loadMoreImages, loaderVisible}) => {
    return (
        <div>
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
        <button onClick={loadMoreImages}>Load More</button>
      )}
        </div>
    )
}