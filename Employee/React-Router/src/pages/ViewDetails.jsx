import { useParams } from "react-router-dom";

function ViewDetails({ books }) {

    const { id } = useParams();

    const book = books.find((b) => String(b.b_id) === String(id));

    if (!book) {
        return <h2>Book not found</h2>;
    }

    return (
        <div className="container mt-5">

            {/* Title */}
            <h1 className="text-center fw-bold mb-5">
                {book.title}
            </h1>

            <div className="row align-items-center">

                {/* Left Side Image */}
                <div className="col-md-4 text-center">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="img-fluid shadow"
                        style={{ maxHeight: "350px" }}
                    />
                </div>

                {/* Right Side Details */}
                <div className="col-md-8">

                    <p><strong>Author :</strong> {book.author}</p>

                    <p><strong>Publisher :</strong> {book.publisher}</p>

                    <p><strong>Type :</strong> {book.type}</p>

                    <p><strong>Price :</strong> ₹{book.price}</p>

                    <p><strong>Description :</strong></p>
                    <p>{book.des}</p>

                </div>

            </div>

        </div>
    );
}

export default ViewDetails;