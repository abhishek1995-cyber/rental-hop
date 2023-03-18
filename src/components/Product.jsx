import Search from "./Search";
import Sidebar_Loc from "./Sidebar_Loc"
import Card from "./Card";

function Product(){
    return (
        <>
        <section className="sptb-sm bg-white">
	        <div className=" container">
            <>
                <Search/>
            </>
            <>
            <div className="row">
                <Sidebar_Loc/>
                <Card/>
            </div>
            </>
                
            </div>
        </section>
        </>
    );
}

export default Product;