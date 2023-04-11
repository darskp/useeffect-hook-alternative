import Testing from "../API/Testing";
import { Suspense } from "react";
const Comp1 = () => {
    return (
        <>
<Suspense fallback={<p>Loading...</p>}>
                <Testing />
</Suspense>
        </>
    )
}
export default Comp1;