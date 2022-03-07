function Tile({apiElement, isInitial}) {
  let title;
  let tileBody;

  if(isInitial){
    title = apiElement[0]

    tileBody = <img src='https://via.placeholder.com/150' alt='filler'></img>
  }

  return (
    <div className='tile'>
      <header className='tileHeader'>
        {title}
      </header>
      <div className='tileBody'>
        {tileBody}
      </div>
    </div>
  )
}

export default Tile