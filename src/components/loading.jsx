import loadingGif from '../images/gif/loading-arrow.gif'

const Loading = () =>{
    return (
        <div className='loading'>
            <img src={loadingGif} alt="please wait while the page is loading"/>
        </div>
        
    );
}

export default Loading