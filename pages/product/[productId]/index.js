import { useRouter } from "next/router";
function ProductDetalis(){
    const router = useRouter();
    const productId=router.query.productId;
return <h4>Product Detalis Page {productId}</h4>
};

export default  ProductDetalis;
