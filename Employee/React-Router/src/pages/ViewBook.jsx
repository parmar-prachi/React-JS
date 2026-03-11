import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function ViewBook({ books, setBooks }) {

    const handleDelete = (id) => {
        const updatedBooks = books.filter((book) => book.b_id !== id);
        setBooks(updatedBooks);
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Available Books</h2>

            <Table bordered hover responsive className="book-table">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Type</th>
                        <th>Publisher</th>
                        <th>Price</th>
                        <th>View-Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {books.length === 0 ? (
                        <tr>
                            <td colSpan="8" className="text-center">
                                No Books Available
                            </td>
                        </tr>
                    ) : (
                        books.map((book) => (
                            <tr key={book.b_id}>
                                <td>{book.b_id}</td>

                                <td>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        width="60"
                                        height="80"
                                        style={{ objectFit: "cover" }}
                                    />
                                </td>

                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.type}</td>
                                <td>{book.publisher}</td>
                                <td>₹ {book.price}</td>

                                <td>
                                    <Link to={`/details/${book.b_id}`} className="view-btn">
                                        View Details
                                    </Link>
                                </td>
                                <td>

                                    <Button
                                        as={Link}
                                        to={`/edit/${book.b_id}`}
                                        variant="warning"
                                        size="sm"
                                        className="me-2"
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(book.b_id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default ViewBook;