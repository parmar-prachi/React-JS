import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EditBook({ books, setBooks }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const book = books.find((b) => String(b.b_id) === String(id));

    if (!book) {
        return <h2 className="text-center mt-5">Book Not Found</h2>;
    }

    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [price, setPrice] = useState(book.price);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedBooks = books.map((b) =>
            String(b.b_id) === String(id)
                ? { ...b, title, author, price }
                : b
        );

        setBooks(updatedBooks);
        navigate("/viewbook");
    };

    return (
        <Container className="mt-5">
            <h2>Edit Book</h2>

            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit" variant="success">
                    Update Book
                </Button>
            </Form>
        </Container>
    );
}

export default EditBook;