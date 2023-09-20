const LocationInfo = ({location}) => {

    return (
     <article className="location">
       <h2 className="location__subtitle">{location?.name}</h2>
       <ul className="location__list">
          <li className="location__item"><span className="location__span1">Type:</span><span className="location__span2">{location?.type}</span></li>
          <li className="location__item"><span className="location__span1">Dimension:</span><span className="location__span2">{location?.dimension || 'unknown'}</span></li>
          <li className="location__item"><span className="location__span1">Population:</span><span className="location__span2">{location?.residents.length}</span></li>
        </ul>
      </article>
     )
  }
  
  export default LocationInfo