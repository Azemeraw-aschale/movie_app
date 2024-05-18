import React from 'react'

const OrderTracking = () => {
  return (
    <div className="container">
      <h3 className='mb-3 text-secondary'>Product Tracking</h3>
      
     
      <div className="row  justify-center">
        
        <div className="col-md-2 m-3">
          
          <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header text-center">Total Delivered</div>
            <div className="card-body">
              <h5 className="card-title text-center">300</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2 m-3">
          <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header text-center">In Progress</div>
            <div className="card-body">
              <h5 className="card-title text-center">100</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2 m-3">
          <div className="card text-bg-info mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header text-center ">Delivered</div>
            <div className="card-body">
              <h5 className="card-title text-center">50</h5>

            </div>
          </div>
        </div>
        <div className="col-md-2 m-3">
          <div className="card text-bg-danger mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header text-center">Cancelled</div>
            <div className="card-body">
              <h5 className="card-title text-center">10</h5>

            </div>
          </div>
        </div>
        <div class="container">
        <h6 class="text-secondary">Filter By </h6>
        <div class="input-group mb-3">
        

        <input type="text" class="form-control" placeholder="Insert Tacking Number" aria-label="filterbox" aria-describedby="basic-addon1" />
        <div class="input-group-append ">
          <div class="input-group-text">

            <i className="fa fa-search fa-2x" style={{ color: 'skyblue' }}></i>


          </div>
        </div>
      </div>
  <div class="row">
    <div class="col">
      <div class="form-check d-flex justify-content-start">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
        <label class="form-check-label" for="exampleRadios1">
          Delivered
        </label>
      </div>
    </div>
    <div class="col">
      <div class="form-check d-flex justify-content-start">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        <label class="form-check-label" for="exampleRadios2">
          Inprogress
        </label>
      </div>
    </div>
    <div class="col">
      <div class="form-check d-flex justify-content-start">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
        <label class="form-check-label" for="exampleRadios3">
          Cancelled
        </label>
      </div>
    </div>
    
  </div>
</div>

        <table className="table caption-top table-striped table-success table-hover table-bordered">
          <caption>Product Tracking</caption>
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">product Type</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Price</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>

            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row">1</th>
              <td>product1</td>
              <td>user</td>
              <td>10</td>
              <td>AA</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>product2</td>
              <td>jacob</td>
              <td>89</td>
              <td>AA</td>
              <td>89</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default OrderTracking