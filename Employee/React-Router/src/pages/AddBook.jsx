import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AddBook({ books, setBooks }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        b_id:"",
        title: "",
        author: "",
        publisher: "",
        type: "",
        price: "",
        image: "",
        des: ""
    }); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            ...formData,
            b_id: Number(formData.b_id)
        };

        setBooks([...books, newBook]);

        alert("Book Added Successfully ✅");


        setFormData({
            b_id: "",
            title: "",
            author: "",
            publisher: "",
            type: "",
            price: "",
            image: "",
            des: ""
        });
        navigate("/"); 
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">Add New Book</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Book Id</Form.Label>
                    <Form.Control
                        type="number"
                        name="b_id"
                        value={formData.b_id}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control
                        type="text"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="des"
                        value={formData.des}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button
                    className="custom-btn"
                    type="submit">
                    Add Book
                </Button>

            </Form>
        </Container>
    );
}

export default AddBook;