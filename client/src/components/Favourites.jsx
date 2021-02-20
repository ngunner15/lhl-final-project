import React, {Fragment, useEffect, useState} from "react";

export default function PhotoGallery() {

  const [favourites, setFavourites] = useState([]);

  const getFavourites = async () => {
    try {
      const response = await fetch(`http://localhost:3001/favourites/${window.location.pathname.split('/')[2]}`);
      const jsonData = await response.json();

      setFavourites(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  // const deleteFav = () => {
  //   $('.fav-remove-button').on('click', function(event) {
  //     const favContainer = $(this).parent('.d-flex').parent('.p-4').parent('.bg-white').parent('#fav-container');
  //     // delete a favourite
  //     console.log("AFTER CLICK : " + event.target.value)
  //     deleteFav(event.target.value);
  //     // deletes html instantly
  //     favContainer.remove();
  //     loadFavourites();
  //   });  
  // }

  const deleteFav = () => {
  }

  console.log(favourites)

  return (
    <div>
      <h1>Welcome to username's gallery</h1>
      {favourites.map(favourite => (
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4" id="fav-container">
        <div className="bg-white rounded shadow-sm">
          <img key={favourite.id} src={favourite.url} alt="main-photo" className="img-fluid card-img-top" />
          <div className="p-4">
            <h3>
              {favourite.title}
            </h3>
            <p className="medium text-muted mb-0">
              {favourite.description}
            </p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <button className="fav-remove-button btn btn-danger" type="button" onClick={deleteFav}>Remove</button>
              <div className="badge badge-info px-3 rounded-pill font-weight-normal">{favourite.posted_date.split('T')[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
       <div className="py-4 text-right"><a href="#" className="btn btn-light px-4 py-2">Go to top</a></div>
    </div>
  );
}