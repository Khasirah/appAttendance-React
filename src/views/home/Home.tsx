import { IMAGE } from "src/assets/Image";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <img src={IMAGE.boy} alt="" />
        </div>
    )

}