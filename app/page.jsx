import LikeButton from "./like-button";

function Header({ title }) {
    console.log(title);
    return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
    const stuffILike = ["Cool Songs", "Money", "Programming"];

    return (
        <div>
            <Header title="I like these:" />
            <ul>
                {stuffILike.map((stuff) => (
                    <li key={stuff}>{stuff}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}