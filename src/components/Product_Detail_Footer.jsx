function Product_Detail_Footer (){
    return (
        <>
    <section>
		<div className="mobile-foot ">
			<p className="text-center  fs-12 btn-book mb-0 text-white">+ 6 Available Locations<i
				className="fa-solid fa-arrow-right mx-2"></i></p>
			<div className="d-flex align-items-center justify-content-between border-bottom-sm px-1">
				<div className="col-sm-6">
					<p className="fs-12 font-weight-bold book-theme mb-1 ms-4"><i
						className="fa-solid fa-location-dot book-loc-mul  "></i><span className="ms-1">Karol Bagh K</span>  </p>
					<h4 className=" mb-1 fs-14 font-weight-bold book-loc-mul">Total Rent <i className="fa fa-inr fs-16"></i><span className="fs-16">1500</span></h4>
					<p className=" mb-1 fs-12 price-hr font-weight-bold"><i className="fa fa-inr fs-12"></i> 500/600 Per
						24 Hrs </p>				
				</div>
					
				<div className="col-sm-6 btn-book bradius1  my-1">		
						<div className="d-flex column-view p-1 ">
							<a href="" className="text-white text-center fs-20 "><img src="/assets/images/png/cart-icon-pm.png" width="20px" style= {{marginRight:"10px"}} />Reserve  </a>
							<p className="fs-10 text-center text-white mb-0">Pay Just <i className="fa fa-inr fs-12"></i><span className="fs-16"> 700</span>  </p>
						</div>	
				</div>
			</div>	
			
		</div>
	</section>
        </>
    )
}
export default Product_Detail_Footer;