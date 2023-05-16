import Header from "./Header"

function About() {
  return (
    <div className="about card mt-4 mb-2 p-1 pt-0" id='about'>
      <div className="card-body">
        <Header text={'ABOUT US'} />
        <div className="info">
          <div className="row cols-8">
            <div className="col-sm-5 col-6"><b> Company Name  :</b></div>
            <div className="col-sm-7 col-6">DAERA-REALTY</div>
            <div className="col-sm-5 col-6"><b> Nature Of Business  :</b></div>
            <div className="col-sm-7 col-6">Consultancy Services	</div>
          </div>
          <div className="speciality mt-3">
            <h5>Our Speciality</h5>
            <ul>
              <li>Wide connectivity</li>
              <li>We listen,We understand, We provide Solution</li>
              <li>A great experience with Happy clients</li>
            </ul>
          </div>
          <div className="properties">
            <b>Properites Listed <br /></b>
            <ul>
              <li>https://coinmasters.in</li>
              <li>https://coinmasters.in/blog</li>
              <li>https://transfer.coinmasters.in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About